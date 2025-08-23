import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Recorridos — Inmobiliaria boutique en Bogotá",
  description: "Arriendo y venta de inmuebles en Bogotá con acompañamiento experto.",
  metadataBase: new URL("https://recorridos.com.co"),
  openGraph: {
    title: "Recorridos — Inmobiliaria boutique en Bogotá",
    description: "Arriendo y venta de inmuebles en Bogotá con acompañamiento experto.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
