import { NavbarComponents } from "@/components/NavbarComponents";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@radix-ui/themes/styles.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import FooterComponents from "@/components/FooterComponents";

const jakartaPlus = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={jakartaPlus.className}>
      <NavbarComponents />
      <Component {...pageProps} />
      <FooterComponents />
    </div>
  );
}
