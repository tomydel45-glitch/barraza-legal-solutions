import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "../src/styles.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Estudio Jurídico Barraza & Asociados — Abogados en Mar del Plata, Tandil, Necochea y Lobería",
  description:
    "Más de 20 años de trayectoria en derecho Civil, Comercial, Laboral, Familia y Daños y Perjuicios. Mar del Plata, Tandil, Necochea y Lobería.",
  authors: [{ name: "Estudio Jurídico Barraza & Asociados" }],
  keywords: [
    "abogado Mar del Plata",
    "abogado Tandil",
    "abogado Necochea",
    "abogado Balcarce",
    "abogado Loberia",
    "Abogado daños y perjuicios en Mar del Plata",
    "Abogado herencias mar del plata",
    "Abogado civil en Mar del Plata",
    "Abogado de sucesiones en Mar del Plata",
    "Estudio Jurídico Inmobiliario mar del plata",
    "Estudio Jurídico agropecuario sudeste bonaerense",
    "Abogado ART mar del plata",
    "Abogado Sucesiones Costa Atlantica",
    "Abogado Sucesiones Necochea",
    "abogado Sucesiones Tandil",
    "abogado laboral mar del plata",
    "abogado divorcios mar del plata",
    "abogado usucapion mar del plata",
    "abogado Sucesiones Loberia",
    "abogado Sucesiones Balcarce",
    "abogado desalojos mar del plata",
  ],
  openGraph: {
    title: "Estudio Jurídico Barraza & Asociados",
    description:
      "Más de 20 años brindando soluciones legales en Mar del Plata, Tandil, Necochea y Balcarce.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
