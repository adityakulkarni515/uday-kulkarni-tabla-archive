"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { searchCompositions } from "@/lib/search";
import type { SearchResult } from "@/types";
import { COMPOSITION_TYPE_COLORS } from "@/lib/utils";
import Link from "next/link";

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  onResultSelect?: () => void;
}

export function SearchBar({
  className,
  placeholder = "Search bols, compositions, taals…",
  onResultSelect,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [focused, setFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }
    const found = searchCompositions(query);
    setResults(found.slice(0, 8));
    setActiveIndex(-1);
  }, [query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!focused) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, -1));
      } else if (e.key === "Escape") {
        inputRef.current?.blur();
        setFocused(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [focused, results.length]);

  const handleClear = () => {
    setQuery("");
    setResults([]);
    inputRef.current?.focus();
  };

  const showDropdown = focused && results.length > 0;

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      onBlur={(e) => {
        if (!containerRef.current?.contains(e.relatedTarget as Node)) {
          setTimeout(() => setFocused(false), 150);
        }
      }}
    >
      {/* Input */}
      <div
        className={cn(
          "flex items-center gap-3 px-4 py-3 rounded-xl border transition-all",
          focused
            ? "bg-canvas-100 border-gold-400/40 shadow-glow-gold"
            : "bg-canvas-100 border-maroon-500/25 hover:border-maroon-500/40"
        )}
      >
        <Search
          size={16}
          className={cn(
            "flex-shrink-0 transition-colors",
            focused ? "text-gold-400" : "text-parchment-400/40"
          )}
        />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-sm text-parchment-200 placeholder:text-parchment-400/30 outline-none"
        />
        {query && (
          <button
            onClick={handleClear}
            className="text-parchment-400/40 hover:text-parchment-300 transition-colors"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Dropdown results */}
      {showDropdown && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-canvas-100 border border-maroon-500/25 rounded-xl shadow-card-hover overflow-hidden z-50">
          {/* Results */}
          <ul>
            {results.map((result, idx) => (
              <li key={`${result.taalId}-${result.compositionId}`}>
                <Link
                  href={`/archive/${result.taalId}/${result.compositionId}`}
                  onClick={() => {
                    setFocused(false);
                    setQuery("");
                    onResultSelect?.();
                  }}
                  className={cn(
                    "flex items-start gap-3 px-4 py-3 transition-colors group",
                    idx === activeIndex
                      ? "bg-gold-400/10"
                      : "hover:bg-white/5"
                  )}
                >
                  {/* Type badge */}
                  <span
                    className={cn(
                      "mt-0.5 text-[9px] px-1.5 py-0.5 rounded border flex-shrink-0",
                      COMPOSITION_TYPE_COLORS[result.compositionType] ??
                        "text-parchment-400 border-white/10"
                    )}
                  >
                    {result.compositionType}
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-parchment-200 truncate group-hover:text-gold-300 transition-colors">
                      {result.compositionName}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] text-gold-400/50">
                        {result.taalName}
                      </span>
                      {result.matchedIn === "bol" && result.snippet && (
                        <span className="text-[10px] text-parchment-400/40 truncate font-mono">
                          &ldquo;{result.snippet}&rdquo;
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {/* Footer hint */}
          <div className="px-4 py-2 border-t border-maroon-500/15 flex items-center justify-between">
            <span className="text-[9px] text-parchment-400/30">
              {results.length} result{results.length !== 1 ? "s" : ""} found
            </span>
            <Link
              href={`/archive?q=${encodeURIComponent(query)}`}
              onClick={() => { setFocused(false); onResultSelect?.(); }}
              className="text-[9px] text-gold-400/50 hover:text-gold-300 transition-colors"
            >
              View all results →
            </Link>
          </div>
        </div>
      )}

      {/* No results */}
      {focused && query.trim().length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-canvas-100 border border-maroon-500/25 rounded-xl p-5 text-center z-50">
          <p className="text-sm text-parchment-400/50">No compositions found</p>
          <p className="text-xs text-parchment-400/30 mt-1">
            Try searching by taal name, composition type, or bol
          </p>
        </div>
      )}
    </div>
  );
}
