import { useEffect } from "preact/hooks";
import createLavaLamp from "../utils/createLavaLamp.js";

export default function TestBG() {
  useEffect(() => {
    createLavaLamp();
  }, []);

  return (
    <div class="blob blob--test absolute top-0 left-0 w-full h-[calc(100vh-10%)]">
      <div class="wrap relative h-screen">
        <canvas id="bubble" class="h-full w-full"></canvas>
      </div>
    </div>
  );
}
