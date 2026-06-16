import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-3 bg-background">
      {/* Sections */}
      <Navbar />
      {/* <div className="h-screen bg-white dark:bg-black">
        <h1 className="text-black dark:text-white">
          Dark Mode Test
        </h1>
      </div> */}
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
    </main>
  );
}
