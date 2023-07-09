import { useEffect } from "preact/hooks";
import useCreateLavaLamp from "../hooks/useCreateLavaLamp.ts";

export default function TestBG() {
  useEffect(() => {
    useCreateLavaLamp();
  }, []);

  return (
    <div class="blob blob--test absolute top-0 left-0 w-full h-full overflow-hidden">
      <div class="wrap relative h-screen">
        <canvas id="bubble" class="h-full w-full"></canvas>
      </div>
    </div>
  );
}
