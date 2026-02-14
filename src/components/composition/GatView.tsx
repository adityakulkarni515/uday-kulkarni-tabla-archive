import type { GatContent } from "@/types";
import { BolDisplay } from "./BolDisplay";

interface GatViewProps {
  content: GatContent;
}

export function GatView({ content }: GatViewProps) {
  return (
    <div className="space-y-4 animate-fade-in">
      {/* Face */}
      <BolDisplay section={content.face} highlight />

      {/* Performance note */}
      {content.note && (
        <div className="px-4 py-3 rounded-lg bg-maroon-500/10 border border-maroon-500/20">
          <p className="text-xs text-parchment-400/60 italic">{content.note}</p>
        </div>
      )}

      {/* Tihai */}
      <div>
        <div className="flex items-center gap-3 my-5">
          <span className="w-full h-px bg-gradient-to-r from-gold-400/20 to-transparent" />
          <span className="text-[9px] text-gold-400/50 uppercase tracking-widest whitespace-nowrap">
            Tihai
          </span>
          <span className="w-full h-px bg-gradient-to-l from-gold-400/20 to-transparent" />
        </div>
        <BolDisplay
          section={content.tihai}
          className="border-gold-400/20 bg-gold-400/3"
        />
      </div>
    </div>
  );
}
