'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";


const menuItems = [
  {
    title: "Página Inicial",
    path: "/",
    accessibility: "Página Inicial",
  },
  {
    title: "Sobre Nós",
    path: "/about",
    accessibility: "Sobre Nós",
  },
  {
    title: "Artigos",
    path: "/articles",
    accessibility: "Artigos",
  },
  {
    title: "Convênios",
    path: "/convenios",
    accessibility: "Convênios",
  },
  {
    title: "Trabalhe Conosco",
    path: "/joinus",
    accessibility: "Trabalhe Conosco",
  },
];

export function Header() {
  const [isSheetOpen, setSheetIsOpen] = useState(false);

  const handleSheetLinkClick = () => {
    setSheetIsOpen(false);
  };

  return (
    <header className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="Logo"
          width={180} height={80}
        />
        <ul className="md:flex gap-6 hidden">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              href={item.path}
              className="font-bold text-muted-foreground hover:text-blue-700 cursor-pointer hover:scale-105 transition-all ease-in-out"
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
            className="shrink-0 md:hidden"
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
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Image src="/logoL.svg" alt="Logo"
                width={30} height={30}
              />
            </Link>
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