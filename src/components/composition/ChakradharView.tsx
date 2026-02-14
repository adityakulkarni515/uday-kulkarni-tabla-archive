import type { ChakradharContent } from "@/types";
import { BolDisplay } from "./BolDisplay";

interface ChakradharViewProps {
  content: ChakradharContent;
}

export function ChakradharView({ content }: ChakradharViewProps) {
  return (
    <div className="space-y-4 animate-fade-in">
      {/* Structure explanation */}
      <div className="px-4 py-3 rounded-lg bg-maroon-500/10 border border-maroon-500/20">
        <p className="text-xs text-parchment-400/60">
          <span className="text-gold-400/70 font-semibold">Chakradhar</span> —
          A composition that completes exactly three cycles (avarts) of the taal,
          resolving with a Tihai on Sam.
        </p>
      </div>

      {/* Three parts */}
      {[content.part1, content.part2, content.part3].map((part, i) => (
        <div key={i}>
          {i > 0 && (
            <div className="flex items-center gap-3 my-4">
              <span className="w-full h-px bg-maroon-500/15" />
              <span className="text-[9px] text-parchment-400/25 uppercase tracking-widest whitespace-nowrap">
                ↓
              </span>
              <span className="w-full h-px bg-maroon-500/15" />
            </div>
          )}
          <BolDisplay section={part} highlight={i === 0} />
        </div>
      ))}

      {/* Tihai */}
      <div>
        <div className="flex items-center gap-3 my-5">
          <span className="w-full h-px bg-gradient-to-r from-gold-400/20 to-transparent" />
          <span className="text-[9px] text-gold-400/50 uppercase tracking-widest whitespace-nowrap">
            ✦ Sam Resolution — Tihai
          </span>
          <span className="w-full h-px bg-gradient-to-l from-gold-400/20 to-transparent" />
        </div>
        <BolDisplay
          section={content.tihai}
          className="border-gold-400/25 bg-gold-400/5"
        />
      </div>
    </div>
  );
}
