import IconChevronDown from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/chevron-down.tsx";
import Blob from "./Blob.tsx";

export default function Hero() {
  return (
    <div
      class="w-full flex px-8 h-[calc(100vh-20px)] justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 text-white relative"
      style="background:linear-gradient(rgba(0, 0, 40, 1),rgba(35, 0, 80, 1));"
    >
      <div className="flex flex-col justify-center items-center z-1">
        <div class="space-y-4 text-center">
          <h1 class="text-4xl inline-block font-bold">
            welcome to the denimcouch
          </h1>
          <p class="text-xl max-w-lg text-blue-100">
            Feel free to chill right here 😎
          </p>
        </div>

        <div>
          <a
            href="#about"
            class="mt-4 transition-colors text-blue-400 cursor-pointer inline-flex items-center group px-4 py-2 hover:text-blue-100"
          >
            Read More{" "}
            <IconChevronDown class="inline-block w-5 h-5 transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      <div className="absolute top-2 inset-x-1 -z-1">
        <Blob />
      </div>
    </div>
  );
}
