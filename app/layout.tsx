import type { Metadata } from "next";
import { fonts } from "@/lib/fonts";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edge AI Innovations - Advanced AI Solutions",
  description: "Edge AI Innovations provides cutting-edge artificial intelligence solutions for businesses, specializing in edge computing and innovative AI technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fonts.sans.variable} ${fonts.mono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
