import Footer from "../components/Footer.tsx";
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
            <h2 class="text-3xl text-teal-50 my-6">
              <div className="flex flex-wrap">
                <span>Hi, I'm Alex 👋🏽</span>
                <span class="md:block">&nbsp;</span>
                <span>Nice to meet you!</span>
              </div>
              <hr class="border-[3px] border-teal-400 my-2 rounded-lg md:w-2/3 lg:w-1/2" />
            </h2>
            <p>Section coming soon...</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
