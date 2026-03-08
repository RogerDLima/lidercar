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
  metadataBase: new URL('https://lidercar.vercel.app'), // Replace with actual domain when deployed
  title: {
    default: "LiderCar | Oficina Mecânica Premium e Especializada",
    template: "%s | LiderCar"
  },
  description: "A LiderCar é a oficina de referência em mecânica premium. Revisão, suspensão, freios e diagnósticos avançados com peças originais e 100% de transparência.",
  keywords: ["mecânica premium", "oficina mecânica", "carros", "revisão veicular", "troca de óleo", "LiderCar", "conserto de carros", "mecânico", "injeção eletrônica", "alinhamento", "balanceamento"],
  authors: [{ name: "LiderCar" }],
  creator: "LiderCar",
  publisher: "LiderCar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "LiderCar | Oficina Mecânica Premium",
    description: "A excelência em mecânica que o seu carro merece. Agende sua revisão com 100% de transparência e garantia.",
    url: "https://lidercar.vercel.app", // Replace
    siteName: "LiderCar",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/client/hero_bg.webp", // Replace with an actual OG image if you have one
        width: 1200,
        height: 630,
        alt: "Oficina LiderCar - Mecânica Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LiderCar | Oficina Mecânica Premium",
    description: "Especialistas em manter seu veículo em alta performance. Transparência, peças originais e diagnóstico preciso.",
    images: ["/images/client/hero_bg.webp"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: '/images/client/logo.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
