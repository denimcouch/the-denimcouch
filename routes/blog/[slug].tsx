import { Head } from "$fresh/runtime.ts";

export default function Slug() {
  return (
    <>
      <Head>
        <title>The Denimcouch</title>
      </Head>
      <main class="p-4 mx-auto max-w-screen-lg">
        <h1>Slug name</h1>
        <p>This whole thing will be a dynamically-loaded article</p>
      </main>
    </>
  );
}
