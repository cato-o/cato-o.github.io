import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";

export default function App() {
  return (
    <main className="text-gray-400 bg-slate-700 body-font">
      <Navbar />
      <About />
      <Projects />
      <Experiences />
      <Contact />
    </main>
  );
}
