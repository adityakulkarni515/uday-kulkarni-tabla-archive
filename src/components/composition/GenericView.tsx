import type { GenericContent } from "@/types";
import { BolDisplay } from "./BolDisplay";
import { cn } from "@/lib/utils";

interface GenericViewProps {
  content: GenericContent;
}

// Sections whose labels should receive the gold "highlighted" treatment
const HIGHLIGHT_LABELS = ["Face (Mukh)", "Face", "Mukh", "Kayda (Face)"];
// Sections whose labels should receive the tihai gold border treatment
const TIHAI_LABELS = ["Tihai", "Tihai Bedam", "Bedam Tihai", "Sam Resolution", "Sam"];

export function GenericView({ content }: GenericViewProps) {
  return (
    <div className="space-y-3 animate-fade-in">
      {content.note && (
        <div className="px-4 py-3 rounded-lg bg-maroon-500/10 border border-maroon-500/20 mb-5">
          <p className="text-xs text-parchment-400/60 italic">{content.note}</p>
        </div>
      )}

      {content.sections.map((section, idx) => {
        const isHighlight = HIGHLIGHT_LABELS.some((l) =>
          section.label.toLowerCase().includes(l.toLowerCase())
        );
        const isTihai = TIHAI_LABELS.some((l) =>
          section.label.toLowerCase().includes(l.toLowerCase())
        );
        // Insert ornamental dividers before Tihai
        return (
          <div key={idx}>
            {isTihai && (
              <div className="flex items-center gap-3 my-5">
                <span className="w-full h-px bg-gradient-to-r from-gold-400/20 to-transparent" />
                <span className="text-[9px] text-gold-400/50 uppercase tracking-widest whitespace-nowrap">
                  Tihai
                </span>
                <span className="w-full h-px bg-gradient-to-l from-gold-400/20 to-transparent" />
              </div>
            )}
            {!isTihai && idx > 0 && isPaltaSection(section.label) && isFirstPalta(content.sections, idx) && (
              <div className="flex items-center gap-3 my-5">
                <span className="w-full h-px bg-gradient-to-r from-maroon-500/20 to-transparent" />
                <span className="text-[9px] text-parchment-400/30 uppercase tracking-widest whitespace-nowrap">
                  Paltas
                </span>
                <span className="w-full h-px bg-gradient-to-l from-maroon-500/20 to-transparent" />
              </div>
            )}
            <BolDisplay
              section={section}
              highlight={isHighlight}
              className={cn(
                isTihai && "border-gold-400/20 bg-gold-400/3"
              )}
            />
          </div>
        );
      })}
    </div>
  );
}

function isPaltaSection(label: string): boolean {
  return /palta|variation|dohra|var\s/i.test(label);
}

function isFirstPalta(sections: GenericContent["sections"], idx: number): boolean {
  for (let i = 0; i < idx; i++) {
    if (isPaltaSection(sections[i].label)) return false;
  }
  return true;
}
