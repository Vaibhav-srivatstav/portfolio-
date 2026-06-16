import type { Metadata } from "next";
import { Geist, Geist_Mono, Sofia_Sans_Condensed, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const sofia_Sans_Condensed = Sofia_Sans_Condensed({
  variable: "--font-sofia-sans-condensed",
  subsets: ["latin"],
})

const spline_Sans_mono = Spline_Sans_Mono({
  variable: "--font-spline-sans-mono",
  subsets: ["latin"]
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vaibhav Portfolio",
  description: "Vaibhav Srivastava",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", geist.variable, sofia_Sans_Condensed.variable, spline_Sans_mono.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
