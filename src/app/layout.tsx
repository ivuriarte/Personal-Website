import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ian Vince Uriarte | Portfolio",
  description:
    "Business Analyst II, Agile Project Manager & AI Application Developer from Davao City, PH. Building intelligent, experience-first digital solutions.",
  keywords: [
    "Ian Vince Uriarte",
    "portfolio",
    "web developer",
    "business analyst",
    "agile project manager",
    "AI developer",
    "Three.js",
    "Next.js",
  ],
  authors: [{ name: "Ian Vince Uriarte" }],
  creator: "Ian Vince Uriarte",
  openGraph: {
    title: "Ian Vince Uriarte | Portfolio",
    description:
      "AI Application Developer & Business Analyst crafting experience-first digital solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ian Vince Uriarte | Portfolio",
    description: "AI Application Developer & Business Analyst",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#080808] text-zinc-100">{children}</body>
    </html>
  );
}
