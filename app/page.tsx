'use client';

import About from "./components/About";
import Benefits from "./components/Benefits";
import Delivery from "./components/Delivery";
import Footer from "./components/Footer";
import Friends from "./components/Friends";
import Hero from "./components/Hero";
import Impermeabilization from "./components/Impermeabilization";
import Menu from "./components/Menu";
import Results from "./components/Results";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="relative flex flex-col">
      <Menu />
      <Hero />
      <Benefits />
      <About />
      <Services />
      <Impermeabilization />
      <Friends />
      <Results />
      <Delivery />
      <Footer />
    </main>
  );
}
