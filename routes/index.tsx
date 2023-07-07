import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Denimcouch</title>
      </Head>
      <Header active="/" />
      <Hero />
      <main
        class="p-4 text-white"
        style="background:rgba(35, 0, 80, 1);"
      >
        <div className="mx-auto max-w-screen-lg">
          <section id="about">
            <h2>About Me</h2>
          </section>
        </div>
      </main>
    </>
  );
}
