"use client";

import { Button } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-canvas" />

      {/* Radial glow from center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(107,16,16,0.25)_0%,transparent_65%)]" />

      {/* Top-left subtle glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(107,16,16,0.08)_0%,transparent_70%)] -translate-x-1/2 -translate-y-1/2" />

      {/* Bottom-right subtle glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.05)_0%,transparent_70%)] translate-x-1/3 translate-y-1/3" />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Horizontal decorative lines */}
      <div className="absolute top-[15%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/10 to-transparent" />
      <div className="absolute bottom-[15%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/10 to-transparent" />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
        {/* Pre-title badge */}
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="w-8 h-px bg-gold-400/40" />
          <span className="text-xs text-gold-400/70 tracking-[0.3em] uppercase font-medium">
            A Digital Archive
          </span>
          <span className="w-8 h-px bg-gold-400/40" />
        </div>

        {/* Main title */}
        <h1 className="font-serif mb-3 leading-none">
          <span className="block text-base sm:text-lg text-parchment-400/60 tracking-[0.2em] uppercase mb-2 font-sans font-light">
            Pandit
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-shimmer pb-2">
            Uday Kulkarni
          </span>
        </h1>

        {/* Ornamental separator */}
        <div className="flex items-center justify-center gap-4 my-6">
          <span className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent to-gold-400/40" />
          <span className="text-gold-400/60 text-xl">✦</span>
          <span className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent to-gold-400/40" />
        </div>

        {/* Subtitle */}
        <p className="font-serif italic text-xl sm:text-2xl text-parchment-300/80 mb-2">
          A Digital Archive of Tabla Compositions
        </p>
        <p className="text-sm text-parchment-400/50 tracking-widest uppercase mb-12">
          Goa · Hindustani Classical Music
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/archive" variant="primary" size="lg">
            <span>Explore Compositions</span>
            <span className="text-gold-300 font-serif">→</span>
          </Button>
          <Button href="/about" variant="outline" size="lg">
            About Guruji
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-14 flex items-center justify-center gap-10 sm:gap-16">
          {[
            { value: "4+", label: "Taals" },
            { value: "13+", label: "Compositions" },
            { value: "∞", label: "Legacy" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-serif text-2xl sm:text-3xl text-gold-400 font-bold">
                {value}
              </p>
              <p className="text-[10px] text-parchment-400/50 tracking-widest uppercase mt-1">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-parchment-400/30 animate-pulse-gold">
        <span className="text-[9px] tracking-widest uppercase">Scroll</span>
        <ChevronDown size={14} />
      </div>
    </section>
  );
}
