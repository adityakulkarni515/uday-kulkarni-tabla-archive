"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { taals } from "@/data/compositions";
import { ChevronRight, ChevronDown, Music2, X } from "lucide-react";
import { COMPOSITION_TYPE_COLORS } from "@/lib/utils";

interface SidebarProps {
  mobileOpen?: boolean;
  onMobileClose?: () => void;
}

export function Sidebar({ mobileOpen = false, onMobileClose }: SidebarProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeTaalId = pathname.split("/")[2] ?? searchParams.get("taal");
  const activeCompId = pathname.split("/")[3];

  const [expandedTaals, setExpandedTaals] = useState<Set<string>>(() => {
    const initial = new Set<string>([]);
    if (activeTaalId) initial.add(activeTaalId);
    return initial;
  });

  useEffect(() => {
    if (activeTaalId) {
      setExpandedTaals((prev) => new Set([...prev, activeTaalId]));
    }
  }, [activeTaalId]);

  const toggleTaal = (taalId: string) => {
    setExpandedTaals((prev) => {
      const next = new Set(prev);
      if (next.has(taalId)) next.delete(taalId);
      else next.add(taalId);
      return next;
    });
  };

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-4 py-5 border-b border-maroon-500/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] text-gold-400/60 tracking-widest uppercase mb-0.5">
              Taal Collection
            </p>
            <h2 className="font-serif text-parchment-200 text-base">
              Compositions
            </h2>
          </div>
          {onMobileClose && (
            <button
              onClick={onMobileClose}
              className="md:hidden p-1.5 text-parchment-400 hover:text-parchment-200"
            >
              <X size={16} />
            </button>
          )}
        </div>
        {/* Beat count summary */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {taals.map((taal) => (
            <button
              key={taal.id}
              onClick={() => {
                toggleTaal(taal.id);
              }}
              className={cn(
                "text-[9px] px-2 py-0.5 rounded-full border transition-all",
                activeTaalId === taal.id
                  ? "bg-gold-400/20 border-gold-400/40 text-gold-300"
                  : "bg-white/5 border-white/10 text-parchment-400/60 hover:border-gold-400/20 hover:text-parchment-300"
              )}
            >
              {taal.name}
            </button>
          ))}
        </div>
      </div>

      {/* Taal list */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-1">
        {taals.map((taal) => {
          const isExpanded = expandedTaals.has(taal.id);
          const isTaalActive = activeTaalId === taal.id;

          return (
            <div key={taal.id}>
              {/* Taal header */}
              <button
                onClick={() => toggleTaal(taal.id)}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-all group",
                  isTaalActive
                    ? "bg-maroon-500/30 border-l-2 border-gold-400 text-parchment-200"
                    : "hover:bg-white/5 text-parchment-300 hover:text-parchment-200 border-l-2 border-transparent"
                )}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={cn(
                      "w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0",
                      isTaalActive
                        ? "bg-gold-400/20"
                        : "bg-white/5 group-hover:bg-gold-400/10"
                    )}
                  >
                    <Music2
                      size={11}
                      className={
                        isTaalActive ? "text-gold-300" : "text-parchment-400"
                      }
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-sm font-medium truncate block">
                      {taal.name}
                    </span>
                    <span className="text-[9px] text-parchment-400/50 truncate block">
                      {taal.beats} beats · {taal.compositions.length} compositions
                    </span>
                  </div>
                </div>
                <span
                  className={cn(
                    "transition-transform flex-shrink-0 text-parchment-400/40",
                    isExpanded && "rotate-0"
                  )}
                >
                  {isExpanded ? (
                    <ChevronDown size={14} />
                  ) : (
                    <ChevronRight size={14} />
                  )}
                </span>
              </button>

              {/* Compositions list */}
              {isExpanded && (
                <div className="ml-3 mt-1 space-y-0.5 pl-3 border-l border-maroon-500/20">
                  {taal.compositions.map((comp) => {
                    const isActive = activeCompId === comp.id;
                    const typeColor =
                      COMPOSITION_TYPE_COLORS[comp.type] ?? "";
                    // Extract just the color class for the dot
                    return (
                      <Link
                        key={comp.id}
                        href={`/archive/${taal.id}/${comp.id}`}
                        className={cn(
                          "flex items-center gap-2 px-2.5 py-2 rounded-md text-xs transition-all group",
                          isActive
                            ? "bg-gold-400/15 text-gold-300"
                            : "text-parchment-400/70 hover:text-parchment-200 hover:bg-white/5"
                        )}
                        onClick={onMobileClose}
                      >
                        <span
                          className={cn(
                            "w-1.5 h-1.5 rounded-full flex-shrink-0",
                            isActive
                              ? "bg-gold-400"
                              : "bg-parchment-400/30 group-hover:bg-parchment-400/60"
                          )}
                        />
                        <span className="truncate leading-tight">
                          {comp.name.split("—")[1]?.trim() ?? comp.name}
                        </span>
                        <span
                          className={cn(
                            "ml-auto text-[9px] px-1.5 py-0.5 rounded border flex-shrink-0",
                            isActive ? "opacity-100" : "opacity-60",
                            typeColor
                          )}
                        >
                          {comp.type}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-maroon-500/15">
        <p className="text-[9px] text-parchment-400/30 text-center font-serif italic">
          {taals.reduce((a, t) => a + t.compositions.length, 0)} compositions across{" "}
          {taals.length} taals
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col w-[280px] flex-shrink-0 h-[calc(100vh-4rem)] sticky top-16 bg-canvas-100 border-r border-maroon-500/20">
        {sidebarContent}
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onMobileClose}
          />
          <aside className="absolute left-0 top-0 bottom-0 w-[280px] bg-canvas-100 border-r border-maroon-500/20 z-50 flex flex-col">
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
}
