"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Copy, Check } from "lucide-react";
import type { BolLine } from "@/types";

interface BolDisplayProps {
  section: BolLine;
  highlight?: boolean;
  className?: string;
}

export function BolDisplay({ section, highlight = false, className }: BolDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(section.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "group relative rounded-xl border transition-all",
        highlight
          ? "bg-gold-400/5 border-gold-400/25"
          : "bg-canvas/60 border-maroon-500/20",
        className
      )}
    >
      <div className="px-5 py-4">
        {/* Label */}
        {section.label && (
          <div className="flex items-center justify-between mb-3">
            <span
              className={cn(
                "text-[10px] font-semibold uppercase tracking-widest",
                highlight ? "text-gold-400" : "text-parchment-400/50"
              )}
            >
              {section.label}
            </span>
            <div className="flex items-center gap-3">
              {section.beats && (
                <span className="text-[9px] text-parchment-400/30 border border-white/10 px-1.5 py-0.5 rounded">
                  {section.beats} beats
                </span>
              )}
              {/* Copy button */}
              <button
                onClick={handleCopy}
                className="opacity-0 group-hover:opacity-100 transition-opacity text-parchment-400/40 hover:text-gold-400"
                title="Copy bols"
              >
                {copied ? (
                  <Check size={12} className="text-green-400" />
                ) : (
                  <Copy size={12} />
                )}
              </button>
            </div>
          </div>
        )}

        {/* Bol text */}
        <div className="bol-text">{section.text}</div>

        {/* Note */}
        {section.note && (
          <p className="mt-3 text-xs text-parchment-400/40 italic border-t border-white/5 pt-3">
            {section.note}
          </p>
        )}
      </div>
    </div>
  );
}
