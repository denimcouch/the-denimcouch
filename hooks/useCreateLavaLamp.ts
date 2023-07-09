import LavaLamp from "../utils/LavaLamp.ts";
import { sceneSettings } from "../utils/sceneSettings.js";

/**
 * Responsible for drawing and rendering the blobs that create the lavalamp effect.
 */
export default function useCreateLavaLamp() {
  // init canvas
  const screen = sceneSettings.screen.init("bubble", null, true);

  // deno-lint-ignore no-explicit-any
  const ctx: CanvasRenderingContext2D | any = screen.ctx;
  screen.resize();

  const lava0 = new LavaLamp(
    screen.width,
    screen.height,
    8,
    "#30c5d2",
    "#b57bee",
    ctx,
  );

  // main animation loop
  const run = () => {
    requestAnimationFrame(run);
    ctx && ctx.clearRect(0, 0, screen.width, screen.height);
    lava0.renderMetaballs();
  };

  run();
}
