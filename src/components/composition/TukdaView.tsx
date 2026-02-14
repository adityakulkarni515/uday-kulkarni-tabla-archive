import type { TukdaContent } from "@/types";
import { BolDisplay } from "./BolDisplay";

interface TukdaViewProps {
  content: TukdaContent;
}

export function TukdaView({ content }: TukdaViewProps) {
  return (
    <div className="space-y-4 animate-fade-in">
      <BolDisplay section={content.face} highlight />
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
