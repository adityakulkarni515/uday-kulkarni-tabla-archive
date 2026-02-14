"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { SearchBar } from "@/components/search/SearchBar";
import { Filters } from "@/components/search/Filters";
import { taals, getAllCompositions } from "@/data/compositions";
import { searchCompositions } from "@/lib/search";
import { COMPOSITION_TYPE_COLORS, DIFFICULTY_COLORS } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { CompositionType } from "@/types";
import { ChevronRight, Music2, BookOpen } from "lucide-react";

function ArchivePageInner() {
  const searchParams = useSearchParams();
  const initialTaal = searchParams.get("taal");
  const initialType = searchParams.get("type") as CompositionType | null;
  const initialQuery = searchParams.get("q") ?? "";

  const [activeTaal, setActiveTaal] = useState<string | null>(initialTaal);
  const [activeType, setActiveType] = useState<CompositionType | null>(initialType);
  const handleTypeChange = (type: string | null) => setActiveType(type as CompositionType | null);
  const searchQuery = initialQuery;

  // Compute displayed compositions
  const allComps = getAllCompositions();
  const filteredComps = searchQuery
    ? searchCompositions(searchQuery, activeTaal, activeType)
    : allComps.filter(({ taal, composition }) => {
        if (activeTaal && taal.id !== activeTaal) return false;
        if (activeType && composition.type !== activeType) return false;
        return true;
      }).map(({ taal, composition }) => ({
        taalId: taal.id,
        taalName: taal.name,
        compositionId: composition.id,
        compositionName: composition.name,
        compositionType: composition.type,
        matchedIn: "name" as const,
        description: composition.description,
        difficulty: composition.difficulty,
      }));

  const totalCount = filteredComps.length;

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      {/* Page header */}
      <div className="mb-8">
        <p className="text-[10px] text-gold-400/60 tracking-[0.3em] uppercase mb-2">
          Complete Collection
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl text-parchment-200 mb-1">
          Tabla Archive
        </h1>
        <p className="text-sm text-parchment-400/50">
          {taals.length} taals · {allComps.length} compositions by Pandit Uday Kulkarni
        </p>
      </div>

      {/* Search */}
      <SearchBar className="mb-5" />

      {/* Filters */}
      <Filters
        activeTaal={activeTaal}
        activeType={activeType}
        onTaalChange={setActiveTaal}
        onTypeChange={handleTypeChange}
        className="mb-8 p-4 bg-canvas-100 border border-maroon-500/15 rounded-xl"
      />

      {/* Results count */}
      <div className="flex items-center justify-between mb-5">
        <p className="text-xs text-parchment-400/40">
          {totalCount} composition{totalCount !== 1 ? "s" : ""}
          {activeTaal
            ? ` in ${taals.find((t) => t.id === activeTaal)?.name}`
            : ""}
          {activeType ? ` · ${activeType}` : ""}
        </p>
      </div>

      {/* Grouped by taal (when no active taal filter) or flat list */}
      {!activeTaal && !searchQuery ? (
        <div className="space-y-10">
          {taals.map((taal) => (
            <section key={taal.id}>
              {/* Taal header */}
              <div className="flex items-center gap-3 mb-4">
                <Link
                  href={`/archive/${taal.id}`}
                  className="group flex items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-lg bg-maroon-500/20 border border-maroon-500/30 flex items-center justify-center group-hover:border-gold-400/30 transition-colors">
                    <Music2 size={14} className="text-gold-400/60" />
                  </div>
                  <div>
                    <h2 className="font-serif text-xl text-parchment-200 group-hover:text-gold-300 transition-colors">
                      {taal.name}
                    </h2>
                    <p className="text-[9px] text-parchment-400/40 tracking-wider">
                      {taal.beats} beats · {taal.vibhag}
                    </p>
                  </div>
                </Link>
                <div className="flex-1 h-px bg-maroon-500/15" />
                <span className="text-xs text-parchment-400/30">
                  {taal.compositions.length}
                </span>
              </div>

              {/* Composition cards */}
              <div className="grid gap-3">
                {taal.compositions.map((comp) => (
                  <Link
                    key={comp.id}
                    href={`/archive/${taal.id}/${comp.id}`}
                    className="group composition-card border-glow bg-canvas-100 rounded-xl px-5 py-4 flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/3 border border-white/8 flex items-center justify-center flex-shrink-0 group-hover:border-gold-400/20 transition-colors">
                      <BookOpen size={16} className="text-parchment-400/40 group-hover:text-gold-400/60 transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-parchment-200 group-hover:text-gold-300 transition-colors truncate font-medium">
                        {comp.name}
                      </p>
                      {comp.description && (
                        <p className="text-xs text-parchment-400/40 truncate mt-0.5">
                          {comp.description}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {comp.difficulty && (
                        <span className={cn("text-[9px] px-2 py-0.5 rounded-full", DIFFICULTY_COLORS[comp.difficulty])}>
                          {comp.difficulty}
                        </span>
                      )}
                      <span className={cn("text-[9px] px-2 py-0.5 rounded-full border", COMPOSITION_TYPE_COLORS[comp.type])}>
                        {comp.type}
                      </span>
                      <ChevronRight size={14} className="text-parchment-400/20 group-hover:text-gold-400/40 transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        /* Flat list for filtered/search results */
        <div className="space-y-3">
          {filteredComps.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-parchment-400/40 text-sm">No compositions found</p>
              <p className="text-parchment-400/25 text-xs mt-2">
                Try adjusting your filters or search query
              </p>
            </div>
          ) : (
            filteredComps.map((result) => (
              <Link
                key={`${result.taalId}-${result.compositionId}`}
                href={`/archive/${result.taalId}/${result.compositionId}`}
                className="group composition-card border-glow bg-canvas-100 rounded-xl px-5 py-4 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-white/3 border border-white/8 flex items-center justify-center flex-shrink-0">
                  <BookOpen size={16} className="text-parchment-400/40" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-parchment-200 group-hover:text-gold-300 transition-colors truncate font-medium">
                    {result.compositionName}
                  </p>
                  <p className="text-xs text-gold-400/50 mt-0.5">{result.taalName}</p>
                  {(result as {snippet?: string}).snippet && (
                    <p className="text-xs text-parchment-400/40 truncate mt-0.5 font-mono">
                      {(result as {snippet?: string}).snippet}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className={cn("text-[9px] px-2 py-0.5 rounded-full border", COMPOSITION_TYPE_COLORS[result.compositionType])}>
                    {result.compositionType}
                  </span>
                  <ChevronRight size={14} className="text-parchment-400/20 group-hover:text-gold-400/40 transition-colors" />
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default function ArchivePage() {
  return (
    <Suspense fallback={<div className="text-parchment-400/40 text-sm py-20 text-center">Loading archive…</div>}>
      <ArchivePageInner />
    </Suspense>
  );
}
