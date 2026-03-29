import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import WhatsappFloatButton from "@/components/ui/WhatsappFloatButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Work PoA - Engenharia, Reformas e Projetos de Interiores",
  description: "Especialistas em serviços de engenharia para casas e apartamentos. Projetos residenciais, PPCI, laudos técnicos, consultoria e acompanhamento de obra.",
  keywords: "engenharia residencial, projetos de casa, projetos de apartamento, PPCI, laudos técnicos, reformas, consultoria, Porto Alegre",
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
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        {children}
        <WhatsappFloatButton />
      </body>
    </html>
  );
}