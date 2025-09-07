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
