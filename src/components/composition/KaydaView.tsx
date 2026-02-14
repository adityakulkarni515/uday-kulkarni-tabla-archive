import type { KaydaContent } from "@/types";
import { BolDisplay } from "./BolDisplay";

interface KaydaViewProps {
  content: KaydaContent;
}

export function KaydaView({ content }: KaydaViewProps) {
  return (
    <div className="space-y-4 animate-fade-in">
      {/* Face / Mukh */}
      <div>
        <BolDisplay section={content.face} highlight />
      </div>

      {/* Paltas */}
      {content.paltas.length > 0 && (
        <div>
          <div className="flex items-center gap-3 my-5">
            <span className="w-full h-px bg-gradient-to-r from-maroon-500/20 to-transparent" />
            <span className="text-[9px] text-parchment-400/30 uppercase tracking-widest whitespace-nowrap">
              Paltas ({content.paltas.length})
            </span>
            <span className="w-full h-px bg-gradient-to-l from-maroon-500/20 to-transparent" />
          </div>

          <div className="space-y-3">
            {content.paltas.map((palta, i) => (
              <BolDisplay key={i} section={palta} />
            ))}
          </div>
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
