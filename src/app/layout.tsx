import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "HM Hospital de Maracaí",
  description: "Bem-vindo ao site do Hospital de Maracaí",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="antialiased">
        <div className="xl:px-20 md:px-10 sm:px-2">
          <Header />
          <div className="my-2 sm:my-2 px-2">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
