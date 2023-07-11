import IconArrowBigDown from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/arrow-big-down.tsx";
import TestBG from "../islands/TestBG.tsx";

export default function Hero() {
  return (
    <div
      class="w-full flex px-8 h-[calc(100vh-20px)] justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 text-white relative"
      style="background:linear-gradient(rgba(0, 0, 40, 1),rgba(35, 0, 80, 1));"
    >
      <div className="flex flex-col justify-around flex-auto items-center z-10">
        <div class="space-y-4 text-center">
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
            class="mt-4 transition-colors bg-teal-500 text-gray-50 rounded-full cursor-pointer inline-flex items-center group px-2 py-2 hover:bg-teal-100 hover:text-gray-800"
          >
            <IconArrowBigDown class="inline-block w-6 h-6 transition group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>
      <TestBG />
    </div>
  );
}
