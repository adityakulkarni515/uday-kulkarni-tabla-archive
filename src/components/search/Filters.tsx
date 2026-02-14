"use client";

import { cn } from "@/lib/utils";
import { taals } from "@/data/compositions";
import { COMPOSITION_TYPES } from "@/data/compositions";
import { COMPOSITION_TYPE_COLORS } from "@/lib/utils";
import { X } from "lucide-react";

interface FiltersProps {
  activeTaal: string | null;
  activeType: string | null;
  onTaalChange: (id: string | null) => void;
  onTypeChange: (type: string | null) => void;
  className?: string;
}

export function Filters({
  activeTaal,
  activeType,
  onTaalChange,
  onTypeChange,
  className,
}: FiltersProps) {
  const hasFilters = activeTaal !== null || activeType !== null;

  return (
    <div className={cn("space-y-4", className)}>
      {/* Clear all */}
      {hasFilters && (
        <button
          onClick={() => { onTaalChange(null); onTypeChange(null); }}
          className="flex items-center gap-1.5 text-xs text-gold-400/60 hover:text-gold-300 transition-colors"
        >
          <X size={12} />
          Clear filters
        </button>
      )}

      {/* Taal filter */}
      <div>
        <p className="text-[9px] text-parchment-400/40 uppercase tracking-widest mb-2.5">
          Filter by Taal
        </p>
        <div className="flex flex-wrap gap-1.5">
          {taals.map((taal) => (
            <button
              key={taal.id}
              onClick={() => onTaalChange(activeTaal === taal.id ? null : taal.id)}
              className={cn(
                "px-3 py-1 text-xs rounded-full border transition-all",
                activeTaal === taal.id
                  ? "bg-maroon-400/30 border-maroon-400/60 text-parchment-200"
                  : "bg-white/3 border-white/10 text-parchment-400/60 hover:border-maroon-400/30 hover:text-parchment-300"
              )}
            >
              {taal.name}
              <span className="ml-1.5 text-[9px] opacity-50">
                {taal.beats}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Type filter */}
      <div>
        <p className="text-[9px] text-parchment-400/40 uppercase tracking-widest mb-2.5">
          Filter by Type
        </p>
        <div className="flex flex-wrap gap-1.5">
          {COMPOSITION_TYPES.map((type) => {
            const colorClass = COMPOSITION_TYPE_COLORS[type] ?? "";
            return (
              <button
                key={type}
                onClick={() => onTypeChange(activeType === type ? null : type)}
                className={cn(
                  "px-3 py-1 text-xs rounded-full border transition-all",
                  activeType === type
                    ? colorClass
                    : "bg-white/3 border-white/10 text-parchment-400/60 hover:border-white/20 hover:text-parchment-300"
                )}
              >
                {type}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
