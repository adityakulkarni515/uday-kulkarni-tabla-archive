import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Guruji",
  description:
    "About Pandit Uday Kulkarni — tabla artist, composer, and teacher from Goa.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />

      <main className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[10px] text-gold-400/60 tracking-[0.3em] uppercase font-medium">
              The Artist Behind the Archive
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-parchment-200 mt-4 mb-2">
              Pandit Uday Kulkarni
            </h1>
            <p className="font-serif italic text-parchment-400/60 text-lg">
              Tabla Maestro · Goa, India
            </p>
            <div className="flex items-center justify-center gap-3 mt-5">
              <span className="w-16 h-px bg-gold-400/30" />
              <span className="text-gold-400/50">✦</span>
              <span className="w-16 h-px bg-gold-400/30" />
            </div>
          </div>

          {/* Portrait and intro */}
          <div className="grid md:grid-cols-5 gap-10 mb-16">
            <div className="md:col-span-2 flex justify-center md:justify-start">
              <div className="relative w-56 h-72 rounded-2xl border border-gold-400/20 bg-gradient-to-br from-maroon-700/30 to-canvas-300 flex items-center justify-center shadow-card">
                <div className="text-center px-4">
                  <div className="w-16 h-16 rounded-full bg-maroon-400/20 border border-gold-400/20 mx-auto mb-3 flex items-center justify-center">
                    <span className="text-2xl font-serif text-gold-400/50">UK</span>
                  </div>
                  <p className="text-parchment-400/30 text-xs italic">Portrait coming soon</p>
                </div>
                <span className="absolute top-3 left-3 text-gold-400/20">✦</span>
                <span className="absolute top-3 right-3 text-gold-400/20">✦</span>
                <span className="absolute bottom-3 left-3 text-gold-400/20">✦</span>
                <span className="absolute bottom-3 right-3 text-gold-400/20">✦</span>
              </div>
            </div>

            <div className="md:col-span-3 space-y-5">
              <blockquote className="font-serif italic text-xl text-parchment-300/80 border-l-2 border-gold-400/30 pl-5 leading-relaxed">
                &ldquo;Rhythm is the language of the universe. The tabla translates
                that language into something the human heart can feel.&rdquo;
              </blockquote>
              <p className="text-sm text-parchment-400/70 leading-relaxed">
                [Full biography to be provided by Pandit Uday Kulkarni. This page
                is reserved for his life story, musical journey, training lineage,
                notable performances, and contributions to Hindustani classical
                tabla tradition.]
              </p>
            </div>
          </div>

          {/* Placeholder sections */}
          {[
            {
              title: "Musical Journey",
              content:
                "From early childhood training to concert stages across India — Guruji's musical journey will be documented here. Including his gurus, the gharana tradition he represents, and the years of dedicated practice that shaped his unique voice.",
            },
            {
              title: "Compositional Philosophy",
              content:
                "What drives the creation of each Kayda, Peshkar, and Gat? This section will explore Guruji's approach to composition — the mathematical rigour, the melodic intuition, and the spiritual dimension of tabla as a solo art form.",
            },
            {
              title: "Teaching & Legacy",
              content:
                "A teacher of many, Guruji has dedicated decades to passing the tradition to future generations. This section will honour his students and his ongoing contribution to Hindustani classical music in Goa and beyond.",
            },
            {
              title: "Performances & Recordings",
              content:
                "A curated list of notable concerts, collaborations, and recordings will be archived here for reference and posterity.",
            },
          ].map(({ title, content }) => (
            <div
              key={title}
              className="mb-8 p-6 rounded-2xl bg-canvas-100 border border-maroon-500/20"
            >
              <h2 className="font-serif text-xl text-parchment-200 mb-3">{title}</h2>
              <div className="h-px bg-gradient-to-r from-gold-400/20 to-transparent mb-4" />
              <p className="text-sm text-parchment-400/50 leading-relaxed italic">
                {content}
              </p>
            </div>
          ))}

          <div className="text-center mt-12">
            <Button href="/archive" variant="primary" size="lg">
              Explore the Compositions
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
