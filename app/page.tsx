'use client';

import About from "./components/About";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="relative flex flex-col">
      <Menu />
      <Hero />
      <Benefits />
      <About />
      <Services />
      <Footer />
    </main>
  );
}
