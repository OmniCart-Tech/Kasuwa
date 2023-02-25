import type { AppProps } from "next/app";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Head from "next/head";
import "../app/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Kasuwa</title>
        <link
          rel="icon"
          href="/icon.svg?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
