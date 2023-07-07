import { Head } from "$fresh/runtime.ts";
import Header from "../../components/Header.tsx";

export default function Blog() {
  return (
    <>
      <Head>
        <title>The Denimcouch | Blog</title>
      </Head>
      <Header active="/blog" />
      <main class="p-4 mx-auto max-w-screen-lg">
        <h1>Blog</h1>
        <p>This is where my blog posts will go.</p>
        <p>clicking on an article will take you to [slug].tsx</p>
      </main>
    </>
  );
}
