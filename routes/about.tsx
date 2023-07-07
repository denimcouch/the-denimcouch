import { Head } from "$fresh/runtime.ts";

export default function About() {
  return (
    <>
      <Head>
        <title>The Denimcouch | About</title>
      </Head>
      <main class="p-4 mx-auto max-w-screen-md">
        <h1>About Me</h1>
        <p>Hi! I'm Alex. Nice to meet you.</p>
      </main>
    </>
  );
}
