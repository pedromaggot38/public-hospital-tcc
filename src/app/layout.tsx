import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hospital Maracaí",
  description: "Bem-vindo ao site do Hospital de Maracaí",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
