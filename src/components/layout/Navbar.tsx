"use client";

import Link from "next/link";
// import { AnimatedThemeTogglerStarDemo } from "./ThemeToggle";
import { useState } from "react";
import { File} from "lucide-react";
import "@/app//globals.css";
import Text3DFlip from "../ui/text-3d-flip";


export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className=" top-0 left-0 right-0 z-50">
            <nav
                className="
          mx-auto
          mt-0
          flex
          max-w-full
          items-center
          justify-between
          px-1
          py-2
          backdrop-blur-xl
          bg-background/10
        "
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="flex flex-col font-logo text-3xl font-bold text-foreground">
                   <span className="flex">VAIBHAV</span><span className="flex">SRIVASTAVA</span>
                </Link>
                
                {/* Links */}
                <div className=" hidden md:flex items-center gap-9">
                    <Link
                        href="#about"
                        className="flex font-nav  text-foreground/80 hover:text-foreground transition"
                    >[
                        <Text3DFlip rotateDirection="top" staggerFrom="first" className="flex" > ABOUT </Text3DFlip> ]
                    </Link>

                    <Link
                        href="#skills"
                        className="flex text-foreground/80 hover:text-foreground font-nav transition"
                    >
                        [
                        <Text3DFlip rotateDirection="top" staggerFrom="first" className="flex" > SKILLS </Text3DFlip> ]
                    </Link>

                    <Link
                        href="#projects"
                        className="flex text-foreground/80 hover:text-foreground font-nav transition"
                    >
                        [
                        <Text3DFlip rotateDirection="top" staggerFrom="first" className="flex" > PROJECTS </Text3DFlip> ]
                    </Link>

                    <Link
                        href="#contact"
                        className="flex text-foreground/80 hover:text-foreground font-nav  transition"
                    >
                        [
                        <Text3DFlip rotateDirection="top" staggerFrom="first" className="flex" > CONTACT </Text3DFlip> ]
                    </Link>
                </div>

                {/* Resume Button */}
                <div className="hidden md:flex  items-center gap-3">
                          
                        
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex text-foreground/80 hover:text-foreground font-nav rounded-full px-5 py-2 "
                    >
                        <span className="flex items-center gap-1">(RESUME <File className="size-3"/>) </span>
                    </a>
                    {/* <AnimatedThemeTogglerStarDemo/> */}
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden  text-foreground/80 hover:text-foreground  ">
                    {isOpen ? <span className="flex">CLOSE<sup className="size-4 text-xl">-</sup></span> : <span className="flex">MENU <sup  className="size-4 text-xl">+</sup></span>}
                </button>

            </nav>
            {isOpen && (
                <div className="md:hidden bg-background mx-4 my-2 backdrop-blur-xl" >
                    <div className="text-foreground/80 hover:text-foreground flex flex-col p-4 gap-4">
                        <Link href='#about' onClick={() => setIsOpen(false)}>
                            [ ABOUT ]
                        </Link>
                        <Link href='#skills' onClick={() => setIsOpen(false)}>
                            [ SKILLS ]
                        </Link>
                        <Link href='#projects' onClick={() => setIsOpen(false)}>
                            [ PROJECTS ]
                        </Link>
                        <Link href='#contact' onClick={() => setIsOpen(false)}>
                            [ CONTACT ]
                        </Link>
                        <Link href='/resume.pdf'
                            target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                             <span className="flex">[ RESUME <File className="size-3" /> ]</span> 
                        </Link>
                        {/* <AnimatedThemeTogglerStarDemo/> */}
                    </div>
                </div>
            )}
        </header>
    );
}