import Link from "next/link";
import { Drum } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-maroon-500/20 bg-canvas-100">
      {/* Top ornamental line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Central dedication */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-maroon-400/20 to-maroon-600/10 border border-gold-400/20 flex items-center justify-center">
              <Drum size={22} className="text-gold-400/60" />
            </div>
          </div>
          <p className="font-serif italic text-lg text-gold-400/80 mb-2">
            &ldquo;With deep gratitude to Guruji&rdquo;
          </p>
          <p className="font-serif text-2xl text-parchment-200">
            Pandit Uday Kulkarni
          </p>
          <p className="text-sm text-parchment-400/60 mt-1 tracking-widest uppercase">
            Tabla Maestro · Goa
          </p>
        </div>

        {/* Divider */}
        <div className="ornamental-divider my-8">✦</div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-10 text-sm">
          <div>
            <h4 className="text-gold-400/70 uppercase tracking-widest text-xs mb-3 font-medium">
              Archive
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/archive", label: "All Compositions" },
                { href: "/archive?taal=teentaal", label: "Teentaal" },
                { href: "/archive?taal=ektaal", label: "Ektaal" },
                { href: "/archive?taal=jhaptal", label: "Jhaptal" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-parchment-400/60 hover:text-gold-300 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold-400/70 uppercase tracking-widest text-xs mb-3 font-medium">
              Compositions
            </h4>
            <ul className="space-y-2">
              {["Kayda", "Peshkar", "Gat", "Chakradhar", "Tukda", "Rela"].map(
                (type) => (
                  <li key={type}>
                    <Link
                      href={`/archive?type=${type}`}
                      className="text-parchment-400/60 hover:text-gold-300 transition-colors"
                    >
                      {type}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="text-gold-400/70 uppercase tracking-widest text-xs mb-3 font-medium">
              About
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Guruji" },
                { href: "/archive?view=search", label: "Search Archive" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-parchment-400/60 hover:text-gold-300 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-parchment-400/40 leading-relaxed">
              A personal reference archive for Guruji&apos;s original compositions.
              All content is the intellectual property of Pandit Uday Kulkarni.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-maroon-500/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-parchment-400/40">
          <p>
            © {year} Pandit Uday Kulkarni. All compositions reserved.
          </p>
          <p className="font-serif italic text-gold-400/40">
            Preserving the classical tradition of Hindustani Tabla
          </p>
        </div>
      </div>
    </footer>
  );
}
