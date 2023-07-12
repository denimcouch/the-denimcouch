import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import About from "../components/About.tsx";
import Hero from "../components/Hero.tsx";

export default function Home() {
  return (
    <>
      <Header active="/" />
      <Hero />
      <main
        class="p-4 lg:px-8 text-white"
        style="background: rgb(20, 0, 60);"
      >
        <div class="mx-auto max-w-screen-lg">
          <About />
        </div>
      </main>
      <Footer />
    </>
  );
}
