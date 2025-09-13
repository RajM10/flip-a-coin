import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
export const metadata: Metadata = {
  metadataBase: new URL("https://flip-coin-experiment.vercel.app"),
  title: {
    default: "Online Coin Flipper – Fair Heads or Tails?",
    template: "%s | Flip a Coin",
  },
  description:
    "Flip a digital coin with synchronized animation. Track global and personal stats to explore if Math.random() behaves like a fair 50/50 coin.",
  keywords: [
    "coin flip",
    "heads or tails",
    "online coin flipper",
    "randomness",
    "probability",
    "Math.random",
    "PRNG",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://flip-coin-experiment.vercel.app/",
    title: "The Digital Coin: Can We Trust the Flip?",
    description:
      "Join a global experiment. Flip a coin, watch distributions evolve, and compare personal vs global stats.",
    images: [
      {
        url: "/coin.png",
        width: 1200,
        height: 630,
        alt: "Online Coin Flipper",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Coin Flipper – Fair Heads or Tails?",
    description:
      "Flip a coin and track fairness over time with global and personal stats.",
    images: ["/coin.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
