import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";

export default function About() {
  return (
    <>
      <Head>
        <title>The Denimcouch | About</title>
      </Head>
      <Header active="/about" />
      <main class="p-4 mx-auto max-w-screen-lg">
        <h1>About Me</h1>
        <p>Hi! I'm Alex. Nice to meet you.</p>
      </main>
    </>
  );
}
