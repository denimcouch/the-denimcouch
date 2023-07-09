import LavaLamp from "../utils/LavaLamp.ts";
import { sceneSettings } from "../utils/sceneSettings.js";

/**
 * Responsible for drawing and rendering the blobs that create the lavalamp effect.
 */
export default function useCreateLavaLamp() {
  // canvas
  const screen = sceneSettings.screen.init("bubble", null, true);
  const ctx: CanvasRenderingContext2D | any = screen.ctx;
  screen.resize();

  const lava0 = new LavaLamp(
    screen.width,
    screen.height,
    6,
    "#30c5d2",
    "#b57bee",
    ctx,
  );

  const lava1 = new LavaLamp(
    screen.width,
    screen.height,
    6,
    "#b57bee",
    "#30c5d2",
    ctx,
  );

  // main loop
  const run = () => {
    requestAnimationFrame(run);
    ctx && ctx.clearRect(0, 0, screen.width, screen.height);
    lava0.renderMetaballs();
    lava1.renderMetaballs();
  };

  run();
}
