import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { OpeningSplash } from "@/components/OpeningSplash";
import { SiteBackground } from "@/components/SiteBackground";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smriti Srivastava — Backend Engineer",
  description:
    "Personal portfolio of Smriti Srivastava — Backend Engineer at Flipkart building event-driven systems at scale.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable} scroll-smooth`}
    >
      <body
        className="min-h-screen font-fraunces text-[var(--ink)] antialiased"
        suppressHydrationWarning
      >
        <SiteBackground />
        <OpeningSplash />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
