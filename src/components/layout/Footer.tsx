import Link from "next/link"
import { Badge } from "../ui/Badge"
import Text3DFlip from "../ui/text-3d-flip"


const Footer = () => {
    return (
        <div className="bottom-0 left-0 right-0 z-60">
            <footer className=" mx-auto
          mt-4
          max-w-full
          px-1
          py-2
          backdrop-blur-md
          bg-background
          text-foreground
          ">
                <div className="font-logo text-2xl">
                    <div className="flex  flex-col sm:items-center sm:justify-center md:items-center-safe md:justify-center-safe  lg:items-end lg:justify-end gap-2">
                        <a href="tel:+918090028409" ><Text3DFlip rotateDirection="top" staggerFrom="first"  >+91 80900 28409</Text3DFlip></a>
                        <a href="mailto:srivaibhav630@gmail.com"><Text3DFlip rotateDirection="top" staggerFrom="first" >srivaibhav630@gmail.com</Text3DFlip></a>
                    </div>
                </div>
                <br />
                <div className="font-nav text-xl">
                    <div className="flex flex-row sm:items-center sm:justify-center md:items-center-safe md:justify-center-safe  lg:items-end lg:justify-end gap-9 items-center justify-center">
                        <a href="https://www.linkedin.com/in/vaibhav-srivastava-620258325" className="flex"><span className="underline decoration-wavy decoration-transparent transition-colors duration-300 hover:decoration-orange-600"> LINKDIN </span></a>
                        <a href="https://github.com/Vaibhav-srivatstav" className="flex"><span className="underline decoration-wavy decoration-transparent transition-colors duration-300 hover:decoration-orange-600"> GITHUB </span></a>
                        <a href="https://www.instagram.com/vaibhav_srivastava09" className="flex"><span className="underline decoration-wavy decoration-transparent transition-colors duration-300 hover:decoration-orange-600">INSTAGRAM</span></a>
                        <a href="https://www.facebook.com/satayamsrivastav.srivastav" className="flex"><span className="underline decoration-wavy decoration-transparent transition-colors duration-300 hover:decoration-orange-600">FACEBOOK</span></a>
                        <a href="https://x.com/sri_vaibhav0" className="flex"><span className="underline decoration-wavy decoration-transparent transition-colors duration-300 hover:decoration-orange-600">X (TWITTER)</span></a>

                    </div>
                </div>
                <br />
                <div className="font-nav text-sm flex flex-col items-center justify-center">
                    <span className="flex">ADDRESS:</span>
                    <span className="flex">BABURA NAUPERWA JAUNPUR</span>
                    <span className="flex">UTTAR PRADESH INDIA</span>
                    <span className="flex">222109</span>
                </div>
                <br />
                <br />
                <div className="flex flex-row items-center justify-center">
                    <div className=" flex items-center gap-20">
                        <Link
                            href="#about"
                            className="font-nav flex text-foreground/80 hover:text-foreground transition"
                        >
                            [
                            <Text3DFlip rotateDirection="top" staggerFrom="first" className="flex" > ABOUT </Text3DFlip> ]
                        </Link>

                        <Link
                            href="#skills"
                            className="text-foreground/80 hover:text-foreground font-nav flex  transition"
                        >
                            [
                            <Text3DFlip rotateDirection="top" staggerFrom="first" className="flex" > SKILLS </Text3DFlip> ]
                        </Link>

                        <Link
                            href="#projects"
                            className="text-foreground/80 hover:text-foreground font-nav flex transition"
                        >
                            [
                            <Text3DFlip rotateDirection="top" staggerFrom="first" className="flex" > PROJECTS </Text3DFlip> ]
                        </Link>

                        <Link
                            href="#contact"
                            className="text-foreground/80 hover:text-foreground font-nav flex  transition"
                        >
                            [
                            <Text3DFlip rotateDirection="top" staggerFrom="first" className="flex" > CONTACT </Text3DFlip> ]
                        </Link>
                    </div>
                </div>
                <br />
                <br />
                <div className="flex flex-wrap items-center justify-center font-bold leading-none">
                    <h2 className="flex flex-wrap justify-center text-5xl ml-2 md:ml-6 sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                        {"VAIBHAV".split("").map((letter, index) => (
                            <span
                                key={index}
                                className="inline-block animate-bounce"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    animationDuration: "2s",
                                }}
                            >
                                {letter}
                            </span>
                        ))}
                    </h2>

                    <h2 className="flex flex-wrap justify-center text-5xl sm:text-6xl ml-2 md:ml-6  md:text-7xl lg:text-8xl xl:text-9xl">
                        {"SRIVASTAVA".split("").map((letter, index) => (
                            <span
                                key={index}
                                className="inline-block animate-bounce"
                                style={{
                                    animationDelay: `${(index + 7) * 0.1}s`,
                                    animationDuration: "2s",
                                }}
                            >
                                {letter}
                            </span>
                        ))}
                    </h2>
                </div>
                <br />
                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
                    {/* Left - Only Large Screens */}
                    <div className="hidden lg:flex flex-col text-sm">
                        <span>🇮🇳 India</span>
                        <span className="text-muted-foreground">
                            {new Date().toLocaleTimeString("en-IN", {
                                hour: "2-digit",
                                minute: "2-digit",
                                 timeZone: "Asia/Kolkata",
                            })}
                        </span>
                    </div>

                    {/* Center */}
                    <div className="flex justify-center text-center">
                        <Link
                            href="/"
                            className="group relative inline-flex items-center font-medium"
                        >
                            <span className="mr-2">Developed by</span>

                            <span className="transition-all duration-500 group-hover:opacity-0">
                                [VS]
                            </span>

                            <span className="absolute left-[105px] whitespace-nowrap opacity-0 transition-all duration-500 group-hover:opacity-100">
                                [ Vaibhav Srivastava ]
                            </span>
                        </Link>
                    </div>

                    {/* Right */}
                    <div className="text-center md:text-right text-xs sm:text-sm text-muted-foreground">
                        <p>© 2026 All rights reserved.</p>
                        <p>
                            Any reproduction, distribution, or use of the
                            materials without permission is prohibited.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
