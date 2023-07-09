import Point from "./Point.ts";
import LavaLamp from "./LavaLamp.ts";

export default class Ball {
  vel: Point
  pos: Point
  size: number
  width: number
  height: number

  constructor(parent: LavaLamp) {
    const min = 0.1;
    const max = 1.5;
    this.vel = new Point(
      (Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random() * 0.25),
      (Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random()),
    );
    this.pos = new Point(
      parent.width * 0.2 + Math.random() * parent.width * 0.6,
      parent.height * 0.2 + Math.random() * parent.height * 0.6,
    );
    this.size = parent.wh / 15 +
      (Math.random() * (max - min) + min) * (parent.wh / 15);
    this.width = parent.width;
    this.height = parent.height;
  }
  // move balls
  move() {
    // bounce borders
    if (this.pos.x >= this.width - this.size) {
      if (this.vel.x > 0) this.vel.x = -this.vel.x;
      this.pos.x = this.width - this.size;
    } else if (this.pos.x <= this.size) {
      if (this.vel.x < 0) this.vel.x = -this.vel.x;
      this.pos.x = this.size;
    }

    if (this.pos.y >= this.height - this.size) {
      if (this.vel.y > 0) this.vel.y = -this.vel.y;
      this.pos.y = this.height - this.size;
    } else if (this.pos.y <= this.size) {
      if (this.vel.y < 0) this.vel.y = -this.vel.y;
      this.pos.y = this.size;
    }

    // velocity
    this.pos = this.pos.add(this.vel);
  }
}
