import { notFound } from "next/navigation";
import Link from "next/link";
import { getTaalById } from "@/data/compositions";
import { COMPOSITION_TYPE_COLORS, DIFFICULTY_COLORS, cn } from "@/lib/utils";
import { ChevronRight, Music2, BookOpen } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ taalId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { taalId } = await params;
  const taal = getTaalById(taalId);
  if (!taal) return { title: "Not Found" };
  return {
    title: `${taal.name} — ${taal.beats} Beats`,
    description: taal.description,
  };
}

export default async function TaalPage({ params }: Props) {
  const { taalId } = await params;
  const taal = getTaalById(taalId);
  if (!taal) notFound();

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-parchment-400/40 mb-6">
        <Link href="/archive" className="hover:text-gold-400 transition-colors">
          Archive
        </Link>
        <ChevronRight size={10} />
        <span className="text-parchment-300">{taal.name}</span>
      </nav>

      {/* Taal header */}
      <div className="mb-10 relative">
        <div className="absolute -inset-4 bg-[radial-gradient(ellipse_at_top_left,rgba(107,16,16,0.1)_0%,transparent_60%)] rounded-2xl" />
        <div className="relative">
          <div className="flex items-start gap-4 mb-5">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-maroon-400/30 to-maroon-600/10 border border-gold-400/20 flex items-center justify-center flex-shrink-0">
              <Music2 size={22} className="text-gold-400/60" />
            </div>
            <div>
              <p className="text-[10px] text-gold-400/60 tracking-[0.3em] uppercase mb-1">
                {taal.beats} Beats · {taal.vibhag}
                {taal.jati ? ` · ${taal.jati} Jati` : ""}
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl text-parchment-200">
                {taal.name}
              </h1>
            </div>
          </div>

          {taal.description && (
            <p className="text-sm text-parchment-400/60 leading-relaxed max-w-2xl border-l-2 border-gold-400/20 pl-4">
              {taal.description}
            </p>
          )}

          {/* Beat structure visual */}
          <div className="mt-5 flex items-center gap-2">
            <span className="text-[9px] text-parchment-400/30 uppercase tracking-widest">
              Vibhag:
            </span>
            {taal.vibhag.split("+").map((beats, i) => (
              <div key={i} className="flex items-center gap-1.5">
                {i > 0 && (
                  <span className="text-parchment-400/20 text-xs">+</span>
                )}
                <div className="flex gap-1">
                  {Array.from({ length: parseInt(beats) }).map((_, j) => (
                    <div
                      key={j}
                      className={cn(
                        "w-5 h-5 rounded flex items-center justify-center text-[9px] font-mono",
                        i === 0 && j === 0
                          ? "bg-gold-400/25 border border-gold-400/40 text-gold-300"
                          : "bg-white/5 border border-white/10 text-parchment-400/40"
                      )}
                    >
                      {i === 0 && j === 0 ? "✦" : "·"}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="ornamental-divider mb-8">✦</div>

      {/* Compositions */}
      <div className="space-y-3">
        <p className="text-xs text-parchment-400/40 mb-4">
          {taal.compositions.length} composition{taal.compositions.length !== 1 ? "s" : ""}
        </p>

        {taal.compositions.map((comp) => (
          <Link
            key={comp.id}
            href={`/archive/${taal.id}/${comp.id}`}
            className="group composition-card border-glow bg-canvas-100 rounded-xl px-6 py-5 flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-white/3 border border-white/8 flex items-center justify-center flex-shrink-0 group-hover:border-gold-400/20 transition-colors mt-0.5">
              <BookOpen
                size={16}
                className="text-parchment-400/40 group-hover:text-gold-400/60 transition-colors"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <p className="text-base font-medium text-parchment-200 group-hover:text-gold-300 transition-colors">
                  {comp.name}
                </p>
                <ChevronRight
                  size={16}
                  className="text-parchment-400/20 group-hover:text-gold-400/40 transition-all group-hover:translate-x-0.5 flex-shrink-0 mt-0.5"
                />
              </div>

              {comp.description && (
                <p className="text-xs text-parchment-400/50 mt-1.5 leading-relaxed line-clamp-2">
                  {comp.description}
                </p>
              )}

              <div className="flex items-center gap-2 mt-3">
                <span
                  className={cn(
                    "text-[9px] px-2 py-0.5 rounded-full border",
                    COMPOSITION_TYPE_COLORS[comp.type]
                  )}
                >
                  {comp.type}
                </span>
                {comp.difficulty && (
                  <span
                    className={cn(
                      "text-[9px] px-2 py-0.5 rounded-full",
                      DIFFICULTY_COLORS[comp.difficulty]
                    )}
                  >
                    {comp.difficulty}
                  </span>
                )}
                {comp.tags?.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 text-parchment-400/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
