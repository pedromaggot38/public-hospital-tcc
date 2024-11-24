'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { Separator } from "../ui/separator";


const menuItems = [
  {
    title: "Início",
    path: "/",
    accessibility: "Página Inicial",
  },
  {
    title: "Sobre",
    path: "/about",
    accessibility: "Sobre Nós",
  },
  {
    title: "Notícias",
    path: "/articles",
    accessibility: "Notícias",
  },
  {
    title: "Médicos",
    path: "/doctors",
    accessibility: "Médicos",
  },
  {
    title: "Portal Transparência",
    path: "/portal-transparencia",
    accessibility: "Portal da Transparência",
  }
];

export function Header() {
  const [isSheetOpen, setSheetIsOpen] = useState(false);

  const handleSheetLinkClick = () => {
    setSheetIsOpen(false);
  };

  return (
    <header className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image src="/logo.png" alt="Logo"
              className="rounded-full"
              width={60} height={60}
            />
          </Link>
          <span className="font-bold text-[#444444]">Hospital Maracaí</span>
        </div>
        <ul className="lg:flex gap-6 hidden items-center">
          <Separator orientation="vertical" className="h-10" />
          {menuItems.map((item) => (
            <Link
              key={item.title}
              href={item.path}
              className="font-bold text-muted-foreground hover:text-[#6495ED] cursor-pointer hover:scale-105 transition-all ease-in-out"
            >
              <span>{item.title}</span>
              <span className="sr-only">, {item.accessibility}</span>
            </Link>
          ))}
        </ul>
      </div>
      <Sheet open={isSheetOpen} onOpenChange={setSheetIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 lg:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Alternar menu de navegação</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle></SheetTitle>
          </SheetHeader>
          <nav className="grid gap-6 text-lg font-medium">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                onClick={handleSheetLinkClick}
              >
                <Image src="/logo.png" alt="Logo"
                  className="rounded-full"
                  width={50} height={50}
                />
              </Link>
              <span className="font-bold">Hospital Maracaí</span>
            </div>
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                className="text-muted-foreground transition-colors hover:text-blue-700"
                onClick={handleSheetLinkClick}
              >
                <span>{item.title}</span>
                <span className="sr-only">, {item.accessibility}</span>
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}