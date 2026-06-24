import type { Metadata } from "next";
import { Fraunces, Outfit, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Fab from "@/components/fab";
import { site } from "@/lib/site";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display-f",
  display: "swap",
});
const body = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body-f",
  display: "swap",
});
const accent = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-accent-f",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Granola Ya Salame · Granola artisanal marocain, fait main à Casablanca",
    template: "%s · Granola Ya Salame",
  },
  description:
    "Granola artisanal marocain, healthy et fait main à Casablanca. Sans sucre raffiné, sans conservateurs. Noté 4.9/5 par 800+ clients. Livraison partout au Maroc en 24–48h.",
  openGraph: {
    type: "website",
    locale: "fr_MA",
    title: "Granola Ya Salame · Granola artisanal marocain",
    description:
      "Le granola qui change ton matin. Noté 4.9/5 par 800+ clients. 100% naturel, fait main à Casablanca.",
    images: ["/images/og-image.jpg"],
  },
  twitter: { card: "summary_large_image", images: ["/images/og-image.jpg"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} ${accent.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Fab />
      </body>
    </html>
  );
}
