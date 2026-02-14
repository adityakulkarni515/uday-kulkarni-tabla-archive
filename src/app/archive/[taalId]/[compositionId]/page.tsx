import { notFound } from "next/navigation";
import Link from "next/link";
import { getCompositionById } from "@/data/compositions";
import { CompositionRenderer } from "@/components/composition/CompositionRenderer";
import { COMPOSITION_TYPE_COLORS, DIFFICULTY_COLORS, cn } from "@/lib/utils";
import { ChevronRight, ChevronLeft } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ taalId: string; compositionId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { taalId, compositionId } = await params;
  const result = getCompositionById(taalId, compositionId);
  if (!result) return { title: "Not Found" };
  return {
    title: `${result.composition.name} — ${result.taal.name}`,
    description: result.composition.description,
  };
}

export default async function CompositionPage({ params }: Props) {
  const { taalId, compositionId } = await params;
  const result = getCompositionById(taalId, compositionId);
  if (!result) notFound();

  const { taal, composition } = result;

  // Find prev/next compositions within the taal
  const compIndex = taal.compositions.findIndex((c) => c.id === composition.id);
  const prevComp = compIndex > 0 ? taal.compositions[compIndex - 1] : null;
  const nextComp =
    compIndex < taal.compositions.length - 1
      ? taal.compositions[compIndex + 1]
      : null;

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-parchment-400/40 mb-6 flex-wrap">
        <Link href="/archive" className="hover:text-gold-400 transition-colors">
          Archive
        </Link>
        <ChevronRight size={10} />
        <Link
          href={`/archive/${taal.id}`}
          className="hover:text-gold-400 transition-colors"
        >
          {taal.name}
        </Link>
        <ChevronRight size={10} />
        <span className="text-parchment-300 truncate max-w-[200px]">
          {composition.name}
        </span>
      </nav>

      {/* Composition header */}
      <div className="mb-8 relative">
        <div className="absolute -inset-4 bg-[radial-gradient(ellipse_at_top_left,rgba(107,16,16,0.08)_0%,transparent_60%)] rounded-2xl pointer-events-none" />
        <div className="relative">
          {/* Type + difficulty badges */}
          <div className="flex items-center gap-2 flex-wrap mb-4">
            <span
              className={cn(
                "text-xs px-3 py-1 rounded-full border",
                COMPOSITION_TYPE_COLORS[composition.type]
              )}
            >
              {composition.type}
            </span>
            {composition.difficulty && (
              <span
                className={cn(
                  "text-xs px-3 py-1 rounded-full",
                  DIFFICULTY_COLORS[composition.difficulty]
                )}
              >
                {composition.difficulty}
              </span>
            )}
            <span className="text-xs text-gold-400/50 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20">
              {taal.name} · {taal.beats} beats
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl text-parchment-100 leading-tight mb-3">
            {composition.name}
          </h1>

          {composition.description && (
            <p className="text-sm text-parchment-400/60 leading-relaxed max-w-2xl">
              {composition.description}
            </p>
          )}

          {/* Tags */}
          {composition.tags && composition.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {composition.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 text-parchment-400/40 border border-white/8"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Ornamental divider */}
      <div className="ornamental-divider mb-8">✦</div>

      {/* Composition content */}
      <div className="mb-12">
        <CompositionRenderer composition={composition} />
      </div>

      {/* Navigation */}
      <div className="border-t border-maroon-500/20 pt-6 grid grid-cols-2 gap-4">
        {prevComp ? (
          <Link
            href={`/archive/${taal.id}/${prevComp.id}`}
            className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-canvas-100 border border-maroon-500/15 hover:border-gold-400/20 transition-all"
          >
            <ChevronLeft
              size={16}
              className="text-parchment-400/40 group-hover:text-gold-400 transition-colors flex-shrink-0"
            />
            <div className="min-w-0">
              <p className="text-[9px] text-parchment-400/30 uppercase tracking-wider">
                Previous
              </p>
              <p className="text-xs text-parchment-300 group-hover:text-gold-300 transition-colors truncate">
                {prevComp.name}
              </p>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextComp ? (
          <Link
            href={`/archive/${taal.id}/${nextComp.id}`}
            className="group flex items-center justify-end gap-3 px-4 py-3 rounded-xl bg-canvas-100 border border-maroon-500/15 hover:border-gold-400/20 transition-all"
          >
            <div className="min-w-0 text-right">
              <p className="text-[9px] text-parchment-400/30 uppercase tracking-wider">
                Next
              </p>
              <p className="text-xs text-parchment-300 group-hover:text-gold-300 transition-colors truncate">
                {nextComp.name}
              </p>
            </div>
            <ChevronRight
              size={16}
              className="text-parchment-400/40 group-hover:text-gold-400 transition-colors flex-shrink-0"
            />
          </Link>
        ) : (
          <Link
            href={`/archive/${taal.id}`}
            className="group flex items-center justify-end gap-3 px-4 py-3 rounded-xl bg-canvas-100 border border-maroon-500/15 hover:border-gold-400/20 transition-all"
          >
            <div className="text-right">
              <p className="text-[9px] text-parchment-400/30 uppercase tracking-wider">
                Back to
              </p>
              <p className="text-xs text-parchment-300 group-hover:text-gold-300 transition-colors">
                {taal.name}
              </p>
            </div>
            <ChevronRight size={16} className="text-parchment-400/40 group-hover:text-gold-400 transition-colors flex-shrink-0" />
          </Link>
        )}
      </div>
    </div>
  );
}
