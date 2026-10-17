import Link from "next/link"
import { Badge } from "../ui/Badge"
import Text3DFlip from "../ui/text-3d-flip"

const Footer = () => {
    return (
        <footer className="w-full mt-4 backdrop-blur-md bg-background text-foreground overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 py-2">
                
                {/* Header Links */}
                <div className="font-logo text-xl sm:text-2xl flex flex-col items-center lg:items-end gap-2">
                    <a href="tel:+918090028409" ><Text3DFlip rotateDirection="top" staggerFrom="first" >+91 80900 28409</Text3DFlip></a>
                    <a href="mailto:srivaibhav630@gmail.com"><Text3DFlip rotateDirection="top" staggerFrom="first" >srivaibhav630@gmail.com</Text3DFlip></a>
                </div>

                <div className="my-6 border-b border-foreground/10" />

                {/* Socials */}
                <div className="font-nav text-lg sm:text-xl flex flex-wrap justify-center gap-4 sm:gap-9">
                    {[
                        {label: "LINKDIN", href: "https://www.linkedin.com/in/vaibhav-srivastava-620258325"},
                        {label: "GITHUB", href: "https://github.com/Vaibhav-srivatstav"},
                        {label: "INSTAGRAM", href: "https://www.instagram.com/vaibhav_srivastava09"},
                        {label: "FACEBOOK", href: "https://www.facebook.com/satayamsrivastav.srivastav"},
                        {label: "X (TWITTER)", href: "https://x.com/sri_vaibhav0"}
                    ].map((link) => (
                        <a key={link.label} href={link.href} className="flex">
                            <span className="underline decoration-wavy decoration-transparent transition-colors duration-300 hover:decoration-orange-600"> {link.label} </span>
                        </a>
                    ))}
                </div>

                <div className="my-6" />

                {/* Address */}
                <div className="font-nav text-xs sm:text-sm flex flex-col items-center justify-center text-center">
                    <span>ADDRESS:</span>
                    <span>BABURA NAUPERWA JAUNPUR</span>
                    <span>UTTAR PRADESH INDIA</span>
                    <span>222109</span>
                </div>

                <div className="my-8" />

                {/* Main Nav */}
                <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-20">
                    {["about", "skills", "projects", "contact"].map((item) => (
                        <Link key={item} href={`#${item}`} className="font-nav flex text-foreground/80 hover:text-foreground transition">
                            [ <Text3DFlip rotateDirection="top" staggerFrom="first" className="flex" > {item.toUpperCase()} </Text3DFlip> ]
                        </Link>
                    ))}
                </div>

                <div className="my-8" />

                {/* Name Animation */}
                <div className="flex flex-wrap items-center justify-center font-bold leading-none">
                    <h2 className="flex flex-wrap justify-center text-4xl sm:text-6xl md:text-8xl lg:text-9xl">
                        {"VAIBHAV".split("").map((letter, index) => (
                            <span key={index} style={{ animationDelay: `${index * 0.1}s`, animationDuration: "2s" }}>
                                {letter}
                            </span>
                        ))}
                    </h2>
                    <h2 className="flex flex-wrap justify-center text-4xl sm:text-6xl md:text-8xl lg:text-9xl ml-2 sm:ml-6">
                        {"SRIVASTAVA".split("").map((letter, index) => (
                            <span key={index}  style={{ animationDelay: `${(index + 7) * 0.1}s`, animationDuration: "2s" }}>
                                {letter}
                            </span>
                        ))}
                    </h2>
                </div>

                <div className="my-8" />

                {/* Bottom Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 pb-4">
                    <div className="hidden md:flex flex-col text-sm">
                        <span>🇮🇳 India</span>
                        <span className="text-muted-foreground">
                            {new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata" })}
                        </span>
                    </div>

                    <div className="flex justify-center text-center">
                        <Link href="/" className="group relative inline-flex items-center font-medium">
                            <span className="mr-2">Developed by</span>
                            <span className="transition-all duration-500 group-hover:opacity-0">[VS]</span>
                            <span className="absolute left-[105px] whitespace-nowrap opacity-0 transition-all duration-500 group-hover:opacity-100">[ Vaibhav Srivastava ]</span>
                        </Link>
                    </div>

                    <div className="text-center md:text-right text-[10px] sm:text-xs text-muted-foreground">
                        <p>© 2026 All rights reserved.</p>
                        <p>Any reproduction, distribution, or use of the materials without permission is prohibited.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer