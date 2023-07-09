import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html class="dark scroll-smooth">
      <Head>
        <title>The Denimcouch</title>
      </Head>
      <body class="dark:(text-gray-50 bg-[rgba(20,0,60,1)]) relative min-h-screen text-gray-900">
        <Component />
      </body>
    </html>
  );
}
