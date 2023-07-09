export default function createRadialGradient(
  w: number,
  h: number,
  r: number,
  c0: string,
  c1: string,
  ctx: CanvasRenderingContext2D,
) {
  const gradient = ctx.createRadialGradient(w / 1, h / 1, 0, w / 1, h / 1, r);
  gradient.addColorStop(0, c0);
  gradient.addColorStop(1, c1);
  return gradient;
}
