import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

export const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-poppins",
  preload: false,
});

export const metadata: Metadata = {
  title: "Bet",
  description: "Betting app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={`${poppinsFont.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
