import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";

export default function Home() {
  return (
    <>
      <Header active="/" />
      <Hero />
      <main
        class="p-4 text-white"
        style="background: rgb(20, 0, 60);"
      >
        <div class="mx-auto max-w-screen-lg">
          <section id="about" class="mt-8">
            <h2 class="text-3xl my-6">About Me</h2>
            <p>Section coming soon...</p>
          </section>
        </div>
      </main>
    </>
  );
}
