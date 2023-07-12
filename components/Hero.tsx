import IconArrowBigDown from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/arrow-big-down.tsx";
import LavaLampBG from "../islands/LavaLampBG.tsx";

export default function Hero() {
  return (
    <div
      class="w-full flex px-8 h-[calc(100vh-60px)] lg:h-[calc(100vh-80px)] justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 text-white relative"
      style="background:linear-gradient(rgba(0, 0, 40, 1),rgba(35, 0, 80, 1));"
    >
      <div className="flex flex-col justify-between flex-auto items-center z-10">
        <div class="my-auto space-y-4 text-center">
          <h1 class="text-4xl lg:text-5xl inline-block font-bold">
            welcome to the denimcouch
          </h1>
          <p class="text-xl lg:text-2xl text-teal-100">
            Feel free to chill right here 😎
          </p>
        </div>

        <div>
          <a
            href="#about"
            class="mt-4 transition-colors text-gray-50 rounded-full cursor-pointer inline-flex items-center group px-2 py-2 hover:text-teal-400"
          >
            <IconArrowBigDown class="motion-safe:animate-bounce inline-block w-6 h-6 transition group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>
      <LavaLampBG />
    </div>
  );
}
