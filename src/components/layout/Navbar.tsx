"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, Drum } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/archive", label: "Archive" },
    { href: "/archive?view=search", label: "Search" },
    { href: "/about", label: "About Guruji" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-canvas-50/95 backdrop-blur-md border-b border-maroon-500/20 shadow-glow-maroon"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Home"
          >
            <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-maroon-400 to-maroon-600 border border-gold-400/30 flex items-center justify-center shadow-glow-maroon group-hover:shadow-glow-gold transition-all duration-300">
              <Drum className="w-4.5 h-4.5 text-gold-300" size={18} />
            </div>
            <div className="hidden sm:block">
              <p className="font-serif text-sm font-semibold text-parchment-200 leading-tight">
                Pt. Uday Kulkarni
              </p>
              <p className="text-[10px] text-gold-400/70 tracking-widest uppercase">
                Tabla Archive
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const isActive =
                href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(href.split("?")[0]);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "px-4 py-2 text-sm rounded-lg transition-all duration-200",
                      isActive
                        ? "text-gold-300 bg-gold-400/10"
                        : "text-parchment-400 hover:text-parchment-200 hover:bg-white/5"
                    )}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 text-parchment-400 hover:text-parchment-200 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-maroon-500/20 bg-canvas-100/95 backdrop-blur-md">
            <ul className="py-3 space-y-1">
              {navLinks.map(({ href, label }) => {
                const isActive =
                  href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(href.split("?")[0]);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={cn(
                        "block px-4 py-3 text-sm transition-colors",
                        isActive
                          ? "text-gold-300 bg-gold-400/10"
                          : "text-parchment-400 hover:text-parchment-200"
                      )}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
