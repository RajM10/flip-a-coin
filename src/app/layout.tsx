export const metadata = {
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
  title: "Coin Flipper - Test Coin Fairness & Probability Calculator",
  description:
    "Test if your coin is fair with our real-time probability calculator. Track heads vs tails, calculate percentages, and determine coin bias instantly.",
  applicationName: "Coin Flipper",
  keywords: [
    "coin flip",
    "probability calculator",
    "fair coin test",
    "heads tails",
    "random generator",
    "statistics",
    "coin toss",
    "probability analysis",
    "statistical test",
    "random number generator",
    "coin bias detector",
    "mathematical probability",
    "flip coin online",
    "heads or tails",
    "coin flipping simulator",
  ],
  authors: [{ name: "Coin Flipper App" }],
  creator: "Coin Flipper App",
  publisher: "Coin Flipper App",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    title: "Coin Flipper - Test Coin Fairness & Probability Calculator",
    description:
      "Test if your coin is fair with our real-time probability calculator. Track heads vs tails, calculate percentages, and determine coin bias instantly.",
    url: "https://flip-a-coin.vercel.app", // Update with your actual domain
    siteName: "Coin Flipper",
    images: [
      {
        url: "/coin.png", // Using your existing coin image
        width: 1200,
        height: 630,
        alt: "Coin Flipper - Probability Calculator",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coin Flipper - Test Coin Fairness & Probability Calculator",
    description:
      "Test if your coin is fair with our real-time probability calculator. Track heads vs tails, calculate percentages, and determine coin bias instantly.",
    images: ["/coin.png"],
    creator: "@coinflipper", // Update with your Twitter handle if you have one
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#000000", // Update with your app's primary color
  colorScheme: "light dark",
  category: "entertainment",
  classification: "Educational Tool",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "https://flip-a-coin.vercel.app", // Update with your actual domain
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
    // yandex: "your-yandex-verification-code", // Add if you use Yandex
    // yahoo: "your-yahoo-verification-code", // Add if you use Yahoo
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Coin Flipper",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
  },
};

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
      </body>
    </html>
  );
}
