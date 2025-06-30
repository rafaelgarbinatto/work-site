import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsappFloatButton from "@/components/ui/WhatsappFloatButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Work PoA - Engenharia, Reformas e Projetos de Interiores",
  description: "Especialistas em projetos de interiores, reformas e engenharia. Projetos em 3D, design de interiores, laudos técnicos e consultoria. R$699,00 até 20m² por ambiente.",
  keywords: "projeto de interiores, reformas, engenharia, design, 3D, laudos técnicos, consultoria, Porto Alegre",
  authors: [{ name: "Work Poa" }],
  openGraph: {
    title: "Work PoA- Projetos de Interiores",
    description: "Especialistas em projetos de interiores, reformas e engenharia",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <WhatsappFloatButton />
      </body>
    </html>
  );
}