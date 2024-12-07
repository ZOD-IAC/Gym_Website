import "@/styles/globals.css";
import Navigation from "@/Component/CommonComponent/Navigation";
import Footer from "@/Component/CommonComponent/Footer";
import useLenis from "@/Component/CustomHook/Smoothscroll";
import { Iceberg } from "next/font/google";
import Head from "next/head";

const iceberg = Iceberg({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }) {
  // useLenis();
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>BodyMechanix - Achieve Your Fitness Goals</title>
        <meta
          name="description"
          content="Join our gym today to achieve your fitness goals with state-of-the-art equipment, expert trainers, and a supportive community."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        {/* Additional Meta Tags */}
        <meta
          name="keywords"
          content="gym, fitness, health, workout, personal training, group classes , BodyMechanix"
        />
        <meta name="author" content="BodyMechanix" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <div className={iceberg.className}>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
