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
  title: "Parva Shah - Full-Stack Developer",
  description: "Full-stack developer passionate about creating innovative solutions and beautiful user experiences. Specializing in React, Node.js, and TypeScript.",
  keywords: ["full-stack developer", "react", "node.js", "typescript", "web development", "portfolio"],
  authors: [{ name: "Parva Shah" }],
  creator: "Parva Shah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://parva-shah.vercel.app",
    title: "Parva Shah - Full-Stack Developer",
    description: "Full-stack developer passionate about creating innovative solutions and beautiful user experiences.",
    siteName: "Parva Shah Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parva Shah - Full-Stack Developer",
    description: "Full-stack developer passionate about creating innovative solutions and beautiful user experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
