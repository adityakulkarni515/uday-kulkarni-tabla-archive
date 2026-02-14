import { Button } from "@/components/ui/Button";

export function Biography() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-canvas-100" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(107,16,16,0.1)_0%,transparent_60%)]" />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-maroon-400/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-maroon-400/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="text-[10px] text-gold-400/60 tracking-[0.3em] uppercase font-medium">
            The Artist
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-parchment-200 mt-3">
            Pandit Uday Kulkarni
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-12 h-px bg-gold-400/30" />
            <span className="text-gold-400/50">✦</span>
            <span className="w-12 h-px bg-gold-400/30" />
          </div>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Portrait placeholder */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-gold-400/10 to-maroon-400/10 blur-lg" />
              {/* Portrait frame */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl border border-gold-400/20 bg-gradient-to-br from-maroon-700/30 to-canvas-300 overflow-hidden shadow-card flex items-center justify-center">
                {/* Placeholder content */}
                <div className="text-center px-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-maroon-400/30 to-maroon-600/10 border border-gold-400/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-serif text-gold-400/50">UK</span>
                  </div>
                  <p className="text-parchment-400/40 text-xs italic">
                    Portrait to be added
                  </p>
                </div>

                {/* Corner ornaments */}
                <span className="absolute top-3 left-3 text-gold-400/20 text-lg">✦</span>
                <span className="absolute top-3 right-3 text-gold-400/20 text-lg">✦</span>
                <span className="absolute bottom-3 left-3 text-gold-400/20 text-lg">✦</span>
                <span className="absolute bottom-3 right-3 text-gold-400/20 text-lg">✦</span>
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div className="lg:col-span-3 space-y-5">
            <p className="font-serif italic text-lg text-parchment-300/80 leading-relaxed border-l-2 border-gold-400/30 pl-5">
              &ldquo;The tabla is not merely an instrument — it is the heartbeat of
              Indian classical music, speaking a language older than words.&rdquo;
            </p>

            <p className="text-parchment-400/70 leading-relaxed text-sm">
              Pandit Uday Kulkarni is a distinguished tabla artist from Goa,
              carrying forward the rich tradition of Hindustani classical
              percussion. With decades of dedicated practice and performance,
              Guruji has developed a unique compositional voice that bridges
              classical orthodoxy with creative exploration.
            </p>

            <p className="text-parchment-400/70 leading-relaxed text-sm">
              His compositions — spanning Teentaal, Ektaal, Jhaptal, Rupak, and
              beyond — are celebrated for their mathematical precision, melodic
              sensibility, and the depth of their layakari (rhythmic play).
              This archive preserves his original Kaydas, Peshkars, Gats, and
              Chakradhars for students and music lovers worldwide.
            </p>

            <p className="text-parchment-400/70 leading-relaxed text-sm">
              [Full biography and discography to be added by Guruji.]
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "Based In", value: "Goa, India" },
                { label: "Tradition", value: "Hindustani Classical" },
                { label: "Gharana", value: "To be specified" },
                { label: "Specialisation", value: "Solo Tabla & Accompaniment" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-white/3 border border-maroon-500/15 rounded-lg px-4 py-3"
                >
                  <p className="text-[9px] text-gold-400/50 uppercase tracking-widest mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm text-parchment-300 font-medium">{value}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button href="/about" variant="secondary" size="md">
                Read Full Biography
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
