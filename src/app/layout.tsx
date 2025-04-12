import type { Metadata } from "next";
import { Geist, Geist_Mono, Fascinate_Inline } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Gothic = Fascinate_Inline({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ['400']
})

export const metadata: Metadata = {
  title: "Bravery Brew Coffee Co",
  description: "Bravery Brew Coffee Company is a veteran owned and operated coffee company that sells grounded coffee, instant coffee and as well as coffee pods from light, medium and even dark roast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Gothic.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
