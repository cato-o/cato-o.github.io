import React from "react";
import About from "./components/About"
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App() {
  return (
    <main className="text-gray-400 bg-slate-700 body-font">
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
