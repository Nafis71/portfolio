import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./SmoothScrollProvider";
import ScrollAnimations from "./ScrollAnimations";
import InitialReveal from "./InitialReveal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nafis Hasan Tonmoy",
  description: "Nafis Hasan Tonmoy",
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
        <SmoothScrollProvider>
          <InitialReveal />
          <ScrollAnimations />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
