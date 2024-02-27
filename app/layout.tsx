import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maclean Higienização - Limpeza de Estofados e Impermeabilização",
  description: "Limpeza de estofados e impermeabilização no Rio de Janeiro e região metropolitana. Atendemos residências, empresas e condomínios. Agende já!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
