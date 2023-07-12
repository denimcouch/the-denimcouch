// deno-lint-ignore-file
import Ball from "./Ball.ts";
import Point from "./Point.ts";
import createRadialGradient from "./createRadialGradient.ts";

export default class LavaLamp {
  step: number;
  width: number;
  height: number;
  wh: number;
  sx: number;
  sy: number;
  paint: boolean;
  metaFill: string | CanvasGradient | CanvasPattern;
  plx: number[];
  ply: number[];
  mscases: number[];
  ix: number[];
  grid: Array<Point>;
  balls: Array<Ball>;
  iter: number;
  sign: number;
  ctx: CanvasRenderingContext2D;

  constructor(
    width: number,
    height: number,
    numBalls: number,
    c0: string,
    c1: string,
    ctx: CanvasRenderingContext2D,
  ) {
    this.step = 5;
    this.width = width;
    this.height = height;
    this.wh = Math.min(width, height);
    this.sx = Math.floor(this.width / this.step);
    this.sy = Math.floor(this.height / this.step);
    this.paint = false;
    this.metaFill = createRadialGradient(width, height, width, c0, c1, ctx);
    this.plx = [0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0];
    this.ply = [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1];
    this.mscases = [0, 3, 0, 3, 1, 3, 0, 3, 2, 2, 0, 2, 1, 1, 0];
    this.ix = [1, 0, -1, 0, 0, 1, 0, -1, -1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1];
    this.grid = [];
    this.balls = [];
    this.iter = 0;
    this.sign = 1;
    this.ctx = ctx;

    // init grid
    for (let i = 0; i < (this.sx + 2) * (this.sy + 2); i++) {
      this.grid[i] = new Point(
        (i % (this.sx + 2)) * this.step,
        Math.floor(i / (this.sx + 2)) * this.step,
      );
    }

    // create metaballs
    for (let k = 0; k < numBalls; k++) {
      this.balls[k] = new Ball(this);
    }
  }

  // compute cell force
  computeForce(x: number, y: number, idx: number) {
    let force;
    let id = idx || x + y * (this.sx + 2);

    if (x === 0 || y === 0 || x === this.sx || y === this.sy) {
      force = 0.6 * this.sign;
    } else {
      force = 0;
      let cell = this.grid[id];
      let i = 0;
      let ball;
      while ((ball = this.balls[i++])) {
        force += (ball.size * ball.size) /
          (-2 * cell.x * ball.pos.x -
            2 * cell.y * ball.pos.y +
            ball.pos.magnitude +
            cell.magnitude);
      }
      force *= this.sign;
    }
    this.grid[id].force = force;
    return force;
  }

  // compute cell
  marchingSquares(next: any) {
    let x = next[0];
    let y = next[1];
    let pdir = next[2];
    let id = x + y * (this.sx + 2);
    if (this.grid[id].computed === this.iter) {
      return false;
    }
    let dir,
      mscase = 0;

    // neighbors force
    for (let i = 0; i < 4; i++) {
      let idn = x + this.ix[i + 12] + (y + this.ix[i + 16]) * (this.sx + 2);
      let force = this.grid[idn].force;
      if (
        (force > 0 && this.sign < 0) ||
        (force < 0 && this.sign > 0) ||
        !force
      ) {
        // compute force if not in buffer
        force = this.computeForce(
          x + this.ix[i + 12],
          y + this.ix[i + 16],
          idn,
        );
      }
      if (Math.abs(force) > 1) mscase += Math.pow(2, i);
    }
    if (mscase === 15) {
      // inside
      return [x, y - 1, false];
    } else {
      // ambiguous cases
      if (mscase === 5) dir = pdir === 2 ? 3 : 1;
      else if (mscase === 10) dir = pdir === 3 ? 0 : 2;
      else {
        // lookup
        dir = this.mscases[mscase];
        this.grid[id].computed = this.iter;
      }
      // draw line
      let ix = this.step /
        (Math.abs(
              Math.abs(
                this.grid[
                  x +
                  this.plx[4 * dir + 2] +
                  (y + this.ply[4 * dir + 2]) * (this.sx + 2)
                ].force,
              ) - 1,
            ) /
            Math.abs(
              Math.abs(
                this.grid[
                  x +
                  this.plx[4 * dir + 3] +
                  (y + this.ply[4 * dir + 3]) * (this.sx + 2)
                ].force,
              ) - 1,
            ) +
          1);
      this.ctx.lineTo(
        this.grid[
          x + this.plx[4 * dir] + (y + this.ply[4 * dir]) * (this.sx + 2)
        ].x +
          this.ix[dir] * ix,
        this.grid[
          x +
          this.plx[4 * dir + 1] +
          (y + this.ply[4 * dir + 1]) * (this.sx + 2)
        ].y +
          this.ix[dir + 4] * ix,
      );
      this.paint = true;
      // next
      return [x + this.ix[dir + 4], y + this.ix[dir + 8], dir];
    }
  }

  renderMetaballs() {
    let i = 0,
      ball;
    while ((ball = this.balls[i++])) ball.move();
    // reset grid
    this.iter++;
    this.sign = -this.sign;
    this.paint = false;
    this.ctx.fillStyle = this.metaFill;
    this.ctx.beginPath();
    // compute metaballs
    i = 0;
    this.ctx.shadowBlur = 50;
    this.ctx.shadowColor = "#30c5d2";
    this.ctx.filter = "blur(1px)";
    while ((ball = this.balls[i++])) {
      // first cell
      let next: any[] | false = [
        Math.round(ball.pos.x / this.step),
        Math.round(ball.pos.y / this.step),
        false,
      ];
      // marching squares
      do {
        next = this.marchingSquares(next);
      } while (next);
      // fill and close path
      if (this.paint) {
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.beginPath();
        this.paint = false;
      }
    }
  }
}
