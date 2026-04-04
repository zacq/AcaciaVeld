import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import FloatingChat from "@/components/sections/FloatingChat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://acaciavelds.com"),
  title: {
    default: "AcaciaVelds Livestock Breeders | Premium Genetics Kenya",
    template: "%s | AcaciaVelds",
  },
  description:
    "AcaciaVelds breeds premium Dorper sheep, Boer goats, Red Maasai sheep and Ankole cattle in Kenya. Verified genetics. Buy breeding stock, meat & dairy animals direct from the farm.",
  keywords: [
    "livestock breeders Kenya",
    "Dorper sheep for sale Kenya",
    "Boer goats Kenya price",
    "Red Maasai sheep breeders",
    "premium livestock genetics Kenya",
    "breeding stock Kenya",
    "AcaciaVelds",
  ],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://acaciavelds.com",
    siteName: "AcaciaVelds Livestock Breeders",
    title: "AcaciaVelds | Premium Livestock Genetics Kenya",
    description:
      "Boers. Dorpers. Red Maasai. Imported bloodlines. Verified performance. Find your next breeding stock.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AcaciaVelds Premium Livestock Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AcaciaVelds | Premium Livestock Genetics Kenya",
    description: "Premium breeding stock — Dorpers, Boers, Red Maasai — Kenya's finest.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body antialiased bg-[#0a1f12] text-white">
        {children}
        <FloatingChat />
      </body>
    </html>
  );
}
