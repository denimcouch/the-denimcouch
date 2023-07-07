import { Head } from "$fresh/runtime.ts";

export default function Blog() {
  return (
    <>
      <Head>
        <title>The Denimcouch | Blog</title>
      </Head>
      <main class="p-4 mx-auto max-w-screen-md">
        <h1>Blog</h1>
        <p>This is where my blog posts will go.</p>
        <p>clicking on an article will take you to [slug].tsx</p>
      </main>
    </>
  );
}