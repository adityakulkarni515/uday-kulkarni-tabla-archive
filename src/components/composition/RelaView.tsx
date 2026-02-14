import type { RelaContent } from "@/types";
import { BolDisplay } from "./BolDisplay";

interface RelaViewProps {
  content: RelaContent;
}

export function RelaView({ content }: RelaViewProps) {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="px-4 py-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
        <p className="text-xs text-parchment-400/60">
          <span className="text-orange-400/70 font-semibold">Rela</span> —
          A fast-tempo composition emphasising rapid finger-work and speed.
          Played in Drut laya.
        </p>
      </div>
      <BolDisplay section={content.face} highlight />
      {content.variations?.map((v, i) => (
        <BolDisplay key={i} section={v} />
      ))}
    </div>
  );
}
