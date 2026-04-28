import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lance Ian T. Leanillo | Software Developer Portfolio",
  description:
    "Portfolio of Lance Ian T. Leanillo, a third-year Computer Science student at Central Philippine University specializing in software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
