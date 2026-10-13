import type { Metadata, Viewport } from "next";
import "@fontsource-variable/literata/wght.css";
import "@fontsource-variable/literata/wght-italic.css";
import "@fontsource-variable/instrument-sans/wght.css";
import "./globals.css";

const SITE_URL = "https://cotexto.eu";
const DESCRIPTION =
  "Traducción en ambos sentidos (español, inglés, francés y alemán), corrección y maquetación para el sector editorial y empresarial. Academia de idiomas en Lorca, presencial y online.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "cotexto. | Traducción, corrección, maquetación y academia de idiomas",
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
  themeColor: "#F5F6F5",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
