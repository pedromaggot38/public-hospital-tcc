'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
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
    path: "/aboutus",
    accessibility: "Sobre Nós",
  },
  {
    title: "Artigos",
    path: "/articles",
    accessibility: "Artigos",
  },
];

export function Header() {
  const [isSheetOpen, setSheetIsOpen] = useState(false);
  const pathname = usePathname();

  const handleSheetLinkClick = () => {
    setSheetIsOpen(false);
  };

  return (
    <header className="top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="sr-only">Logo</span>
        </Link>
        {menuItems.map((item) => {
          const isActive =
            (pathname === item.path) ||
            (pathname.startsWith(item.path + '/') && item.path !== '/dashboard');

          return (
            <Link
              key={item.title}
              href={item.path}
              className={`text-muted-foreground transition-colors hover:text-foreground ${isActive ? 'text-primary font-semibold' : ''}`}
            >
              <span>{item.title}</span>
              <span className="sr-only">, {item.accessibility}</span>
            </Link>
          );
        })}
      </nav>
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
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Image src="/logo.png" alt="Logo" width={32} height={32} />
            </Link>
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                className={`text-muted-foreground transition-colors hover:text-foreground ${pathname === item.path ? 'text-primary font-semibold' : ''}`}
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