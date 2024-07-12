import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import Feactured from "./components/featured";
import Parallax from "./components/parallax";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Feactured />
      <Parallax />
    </div>
  );
}
