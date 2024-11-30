import "@/styles/globals.css";
import Navigation from "@/Component/CommonComponent/Navigation";
import Footer from "@/Component/CommonComponent/Footer";
import useLenis from "@/Component/CustomHook/Smoothscroll";
import { Iceberg } from "next/font/google";

const iceberg = Iceberg({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }) {
  // useLenis();
  return (
    <div className={iceberg.className}>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
