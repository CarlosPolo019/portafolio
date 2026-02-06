"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { useState, useEffect } from "react";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Cerrar el menú DESPUÉS de que termine la transición de página
  useEffect(() => {
    if (open) {
      // Esperar a que termine la transición de StairTransition (delay: 1 + duration: 0.4 = 1.4s)
      const timer = setTimeout(() => {
        setOpen(false);
      }, 1500); // Un poco más de tiempo para asegurar que termine

      return () => clearTimeout(timer);
    }
  }, [pathname, open]);

  // Función para manejar el clic en los enlaces - NO cerrar inmediatamente
  const handleLinkClick = () => {
    // No cerramos el menú aquí, se cerrará automáticamente después de la transición
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-violet-400" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" onClick={handleLinkClick}>
            <span className="text-4xl font-semibold" aria-label="Carlos home">
              Carlos<span className="text-violet-400">.</span>
            </span>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                onClick={handleLinkClick}
                className={`${
                  link.path === pathname &&
                  "text-violet-400 border-b-2 border-violet-400"
                } text-xl capitalize hover:text-violet-400 transition-all duration-300`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
