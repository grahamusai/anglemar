import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import Feactured from "./components/featured";
import Parallax from "./components/parallax";
import Cta from "./components/cta";
import Gallery from "./components/gallery";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Feactured />
      <Parallax />
      <Cta />
      <Gallery />
      <Footer />
    </div>
  );
} 
