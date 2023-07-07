import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Denimcouch</title>
      </Head>
      <Header active="/" />
      <main class="p-4 mx-auto max-w-screen-lg">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to The Denimcouch!
        </p>
      </main>
    </>
  );
}
