import type { Metadata, Viewport } from "next";
import "@fontsource-variable/literata/wght.css";
import "@fontsource-variable/literata/wght-italic.css";
import "@fontsource-variable/instrument-sans/wght.css";
import "./globals.css";

const SITE_URL = "https://cotexto.eu";
const DESCRIPTION =
  "Traducción, corrección y maquetación para el sector editorial y empresarial. Del español al inglés, francés y alemán.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "cotexto. | Traducción, corrección y maquetación editorial",
    template: "%s | cotexto.",
  },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "cotexto.",
    locale: "es_ES",
    title: "cotexto. | Servicios lingüísticos profesionales",
    description: DESCRIPTION,
    images: [
      {
        url: "https://cotexto.eu/assets/images/card.jpg",
        width: 1280,
        height: 800,
        alt: "cotexto. Servicios lingüísticos profesionales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "cotexto. | Servicios lingüísticos profesionales",
    description: DESCRIPTION,
    images: ["https://cotexto.eu/assets/images/card.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F5F6F8",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
