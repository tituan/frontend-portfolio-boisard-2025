import { Roboto, Geist, Geist_Mono, Courier_Prime } from "next/font/google";
import '../../styles/main.scss';
import '../../lib/fontawesome';

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "200", "400", "700"], 
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Antoine BOISARD - Portfolio",
  description: "Portfolio de Antoine BOISARD, développeur web Front-End et photographe passionné. Découvrez mes projets et mes clichés.",
  keywords: "développeur web, portfolio, photographie, next.js, react",
  authors: [{ name: "Antoine BOISARD" }],
  openGraph: {
    title: "Antoine BOISARD - Portfolio",
    description: "Développeur web et photographe passionné",
    url: "https://antoineboisard.fr",
    siteName: "Antoine BOISARD - Portfolio",
    images: [
      {
        url: "/img/og-image.jpg", // Mettez une image dans public/img/
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antoine BOISARD - Portfolio",
    description: "Développeur web et photographe passionné",
    images: ["/img/twitter-image.jpg"], // Mettez une image dans public/img/
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr"><body className={`${roboto.variable} ${geistSans.variable} ${geistMono.variable} ${courierPrime.variable}`}>
      {children}
    </body></html>
  );
}
