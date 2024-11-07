import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

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
        <div className="md:px-20">
          <Header />
          <div className="my-2 sm:my-8">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
