import React, { useEffect } from 'react';
import { initGA, logPageView } from './utils/analytics';
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Technologies from "./components/Technologies"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

const App = () => {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);
  return (
    <div className="overflow-x-hidden dark:text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      
      <div className="fixed top-0 -z-10 h-full w-full">

      {/* Background for light mode */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-50 bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] dark:hidden"></div>
      
      {/* Background for dark mode */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-800 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] hidden dark:block"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div> // force a redeploy
  )
}

export default App
