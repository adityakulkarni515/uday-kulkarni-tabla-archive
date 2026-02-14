import Link from "next/link";
import { taals } from "@/data/compositions";
import { COMPOSITION_TYPE_COLORS } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export function TaalShowcase() {
  return (
    <section className="relative py-24 px-6">
      <div className="absolute inset-0 bg-canvas" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(107,16,16,0.08)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-14">
          <span className="text-[10px] text-gold-400/60 tracking-[0.3em] uppercase font-medium">
            Browse by Taal
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-parchment-200 mt-3">
            The Collection
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-12 h-px bg-gold-400/30" />
            <span className="text-gold-400/50">✦</span>
            <span className="w-12 h-px bg-gold-400/30" />
          </div>
        </div>

        {/* Taal grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {taals.map((taal) => (
            <Link
              key={taal.id}
              href={`/archive/${taal.id}`}
              className="group relative composition-card border-glow bg-canvas-100 rounded-2xl p-6 overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-maroon-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Beat count badge */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center">
                <span className="text-xs font-bold text-gold-400">{taal.beats}</span>
              </div>

              <div className="relative z-10">
                {/* Taal info */}
                <div className="mb-4">
                  <p className="text-[9px] text-gold-400/50 tracking-[0.25em] uppercase mb-1">
                    {taal.beats} beats · {taal.vibhag}
                  </p>
                  <h3 className="font-serif text-2xl text-parchment-200 group-hover:text-gold-300 transition-colors">
                    {taal.name}
                  </h3>
                  {taal.jati && (
                    <p className="text-xs text-parchment-400/50 mt-0.5 italic">
                      {taal.jati} Jati
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-parchment-400/60 leading-relaxed line-clamp-2 mb-4">
                  {taal.description}
                </p>

                {/* Composition type pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {taal.compositions.map((comp) => (
                    <span
                      key={comp.id}
                      className={`text-[9px] px-2 py-0.5 rounded-full border ${COMPOSITION_TYPE_COLORS[comp.type] ?? "text-parchment-400 bg-white/5 border-white/10"}`}
                    >
                      {comp.type}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-parchment-400/50">
                    {taal.compositions.length} compositions
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gold-400/60 group-hover:text-gold-300 transition-colors">
                    Explore
                    <ChevronRight
                      size={12}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-10">
          <Link
            href="/archive"
            className="inline-flex items-center gap-2 text-sm text-gold-400/70 hover:text-gold-300 transition-colors group"
          >
            View All Compositions
            <ChevronRight
              size={14}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
