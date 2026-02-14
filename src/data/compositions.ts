import type { Taal } from "@/types";

// ─────────────────────────────────────────────────────────────────────────────
// TABLA ARCHIVE — Placeholder Composition Data
// Pandit Uday Kulkarni — Goa
// Replace with real compositions as provided by Guruji
// ─────────────────────────────────────────────────────────────────────────────

export const taals: Taal[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // TEENTAAL — 16 beats (4+4+4+4)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "teentaal",
    name: "Teentaal",
    beats: 16,
    vibhag: "4+4+4+4",
    jati: "Chatusra",
    description:
      "Teentaal is the most commonly used taal in Hindustani classical music. It has 16 beats divided into four vibhags of four beats each. The Sam falls on the first beat and the Khali on the ninth.",
    compositions: [
      // ── KAYDA ─────────────────────────────────────────────────────────────
      {
        id: "teentaal-kayda-1",
        name: "Kayda — Dha Dha Tete",
        type: "Kayda",
        description:
          "A foundational Kayda in Teentaal exploring the primary bols with systematic paltas. This composition demonstrates the elegance of alternating Dha and Tete patterns.",
        difficulty: "Intermediate",
        content: {
          face: {
            label: "Face (Mukh)",
            text: "Dha Dha Tete | Dha Dha Tete | Dha Tete Dha Ge | Nage Tete Nage\nNa Na Tete | Na Na Tete | Na Tete Na Ke | Nage Tete Nage",
            beats: 16,
          },
          paltas: [
            {
              label: "Palta 1",
              text: "Dha Tete Dha Ge | Dha Tete Dha Ge | Dha Tete Dha Ge | Nage Tete Nage\nNa Tete Na Ke | Na Tete Na Ke | Na Tete Na Ke | Nage Tete Nage",
              beats: 16,
            },
            {
              label: "Palta 2",
              text: "Tete Dha Dha Ge | Tete Dha Dha Ge | Dha Tete Dha Ge | Nage Tete Nage\nTete Na Na Ke | Tete Na Na Ke | Na Tete Na Ke | Nage Tete Nage",
              beats: 16,
            },
            {
              label: "Palta 3",
              text: "Dha Ge Tete Dha | Ge Tete Dha Ge | Tete Dha Ge Tete | Nage Tete Nage\nNa Ke Tete Na | Ke Tete Na Ke | Tete Na Ke Tete | Nage Tete Nage",
              beats: 16,
            },
            {
              label: "Palta 4",
              text: "Dha Dha Ge Tete | Dha Dha Ge Tete | Dha Ge Tete Dha | Nage Tete Nage\nNa Na Ke Tete | Na Na Ke Tete | Na Ke Tete Na | Nage Tete Nage",
              beats: 16,
            },
          ],
          tihai: {
            label: "Tihai",
            text: "Dha Tete Dha Ge Nage Tete Nage — Dha Tete Dha Ge Nage Tete Nage — Dha Tete Dha Ge Nage Tete Nage — Dha",
            note: "3 times with rest, landing on Sam (Dha)",
          },
        },
        tags: ["fundamental", "dha", "tete", "Lucknow gharana"],
      },

      // ── PESHKAR ───────────────────────────────────────────────────────────
      {
        id: "teentaal-peshkar-1",
        name: "Peshkar — Vistar",
        type: "Peshkar",
        description:
          "A meditative Peshkar that opens the tabla performance. Played slowly, it establishes the mood and demonstrates the full range of tabla bols in an unfolding, improvisatory style.",
        difficulty: "Advanced",
        content: {
          face: {
            label: "Face (Mukh)",
            text: "Dha — Ge — Tete — Dha — | Ge — Tete — Dha — Ge | Nage — Tete — Nage — Dha | — — — — Dha — — —",
            beats: 16,
            note: "Played in Vilambit laya (slow tempo)",
          },
          variations: [
            {
              label: "Variation 1",
              text: "Dha Ge Tete Dha | Ge Tete Dha Ge | Nage Tete Nage Dha | Ge Dha — —\nNa Ke Tete Na | Ke Tete Na Ke | Nage Tete Nage Na | Ke Na — —",
              beats: 16,
            },
            {
              label: "Variation 2",
              text: "Dha — Dha Ge | Tete Dha — Ge | Nage — Tete Nage | Dha Dha — —\nNa — Na Ke | Tete Na — Ke | Nage — Tete Nage | Na Na — —",
              beats: 16,
            },
          ],
          tihai: {
            label: "Tihai",
            text: "Dha Ge Nage Tete Dha — | Dha Ge Nage Tete Dha — | Dha Ge Nage Tete Dha",
            note: "Bedam Tihai — no breath between repetitions",
          },
        },
        tags: ["vilambit", "meditation", "opening"],
      },

      // ── GAT ───────────────────────────────────────────────────────────────
      {
        id: "teentaal-gat-1",
        name: "Gat — Dhaage Tete",
        type: "Gat",
        description:
          "A crisp Gat composition in Madhya laya (medium tempo), showcasing the interplay of Dhaage and Tete bols. This composition is often performed as a demonstration piece.",
        difficulty: "Intermediate",
        content: {
          face: {
            label: "Face (Mukh)",
            text: "Dhaage Tete | Kata Gadi Gene | Dhaage Tete | Kata Gadi Gene\nDhaage Tete | Dha Ge Tete | Dha — — — | — — — —",
            beats: 16,
          },
          tihai: {
            label: "Tihai",
            text: "Dhaage Tete Kata Gadi Gene Dha — | Dhaage Tete Kata Gadi Gene Dha — | Dhaage Tete Kata Gadi Gene Dha",
          },
          note: "Performed in Madhya laya (medium tempo), approx. 60-80 BPM",
        },
        tags: ["madhya laya", "dhaage", "demonstration"],
      },

      // ── CHAKRADHAR ───────────────────────────────────────────────────────
      {
        id: "teentaal-chakradhar-1",
        name: "Chakradhar — Teen Avart",
        type: "Chakradhar",
        description:
          "A Chakradhar Gat spanning three avarts (cycles) of Teentaal. It culminates in a powerful Tihai that resolves precisely on the Sam after the third repetition.",
        difficulty: "Advanced",
        content: {
          part1: {
            label: "First Avart (Cycle 1)",
            text: "Dha Ge Tete | Dha Ge Tete | Dha Ge Tete Ge | Nage Tete Nage\nNa Ke Tete | Na Ke Tete | Na Ke Tete Ke | Nage Tete Nage",
            beats: 16,
          },
          part2: {
            label: "Second Avart (Cycle 2)",
            text: "Tete Dha Ge | Tete Dha Ge | Tete Dha Ge Tete | Dha Ge Nage Tete\nTete Na Ke | Tete Na Ke | Tete Na Ke Tete | Na Ke Nage Tete",
            beats: 16,
          },
          part3: {
            label: "Third Avart (Cycle 3)",
            text: "Dha — Ge Tete | Dha — Ge Tete | Dha Ge Nage Tete | Nage — — —\nNa — Ke Tete | Na — Ke Tete | Na Ke Nage Tete | Nage — — —",
            beats: 16,
          },
          tihai: {
            label: "Tihai (Sam Resolution)",
            text: "Dha Ge Tete Dha Ge Nage Tete Nage Dha |\nDha Ge Tete Dha Ge Nage Tete Nage Dha |\nDha Ge Tete Dha Ge Nage Tete Nage Dha ✦Sam",
            note: "Each repetition of the Tihai = 16 beats. Lands on Sam after 3 repetitions.",
          },
        },
        tags: ["chakradhar", "three cycles", "sam resolution", "advanced"],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EKTAAL — 12 beats (2+2+2+2+2+2)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "ektaal",
    name: "Ektaal",
    beats: 12,
    vibhag: "2+2+2+2+2+2",
    jati: "Chatusra",
    description:
      "Ektaal has 12 beats divided into six vibhags of two beats each. It is used in both Vilambit (slow) and Drut (fast) compositions and is a cornerstone taal for khayal accompaniment.",
    compositions: [
      // ── KAYDA ─────────────────────────────────────────────────────────────
      {
        id: "ektaal-kayda-1",
        name: "Kayda — Tin Tin Na",
        type: "Kayda",
        description:
          "A classical Kayda in Ektaal built on the Tin Tin Na structure. The composition makes elegant use of the khali (empty) vibhags characteristic of Ektaal.",
        difficulty: "Intermediate",
        content: {
          face: {
            label: "Face (Mukh)",
            text: "Tin Tin | Na Dhin | Dhin Na | Tin Tin | Na Dhin | Dhin Na\nNa Na | Na Dhin | Dhin Na | Tin Tin | Na Dhin | Dhin Na",
            beats: 12,
          },
          paltas: [
            {
              label: "Palta 1",
              text: "Tin Na | Tin Dhin | Na Dhin | Tin Na | Tin Dhin | Na Dhin\nNa Na | Na Dhin | Na Dhin | Tin Na | Tin Dhin | Na Dhin",
              beats: 12,
            },
            {
              label: "Palta 2",
              text: "Dhin Na | Tin Tin | Na Dhin | Dhin Na | Tin Tin | Na Dhin\nDhin Na | Na Na | Na Dhin | Dhin Na | Tin Tin | Na Dhin",
              beats: 12,
            },
            {
              label: "Palta 3",
              text: "Tin Tin Na | Dhin Dhin Na | Tin Tin Na | Dhin Dhin Na\nNa Na Na | Dhin Dhin Na | Tin Tin Na | Dhin Dhin Na",
              beats: 12,
              note: "Played in Drut laya for this palta",
            },
          ],
          tihai: {
            label: "Tihai",
            text: "Tin Na Dhin Na — | Tin Na Dhin Na — | Tin Na Dhin Na — Dha",
            note: "Bedam tihai resolving to Sam",
          },
        },
        tags: ["ektaal", "tin tin na", "khayal"],
      },

      // ── PESHKAR ───────────────────────────────────────────────────────────
      {
        id: "ektaal-peshkar-1",
        name: "Peshkar — Vilambit",
        type: "Peshkar",
        description:
          "A languid Peshkar in Ektaal perfect for slow khayal accompaniment. The composition breathes across the 12-beat cycle with long sustained bols.",
        difficulty: "Advanced",
        content: {
          face: {
            label: "Face (Mukh)",
            text: "Dha — — — | Ge — Tete — | Nage — — — | Dhin — — —\nNa — — — | Ke — Tete — | Nage — — — | Dhin — — —",
            beats: 12,
            note: "Vilambit — each bol occupies two matras",
          },
          variations: [
            {
              label: "Variation 1 (Double Speed)",
              text: "Dha Ge Tete Nage | Dhin Ge Tete Nage | Dha Ge Tete Nage | Dhin Ge Tete —\nNa Ke Tete Nage | Dhin Ke Tete Nage | Na Ke Tete Nage | Dhin Ke Tete —",
              beats: 12,
            },
          ],
          tihai: {
            label: "Tihai",
            text: "Dha Ge Nage Dhin — | Dha Ge Nage Dhin — | Dha Ge Nage Dhin",
          },
        },
        tags: ["vilambit", "khayal", "slow"],
      },

      // ── RELA ─────────────────────────────────────────────────────────────
      {
        id: "ektaal-rela-1",
        name: "Rela — Fast Drut",
        type: "Rela",
        description:
          "A blazing Rela in Ektaal demonstrating the rapid interplay of fingers across both drums. Performed in Drut (fast) laya, this piece showcases technical virtuosity.",
        difficulty: "Advanced",
        content: {
          face: {
            label: "Face (Mukh)",
            text: "Diri Diri | Dha Ge Na Ge | Diri Diri | Tete Ge Na Ge | Diri Diri | Dha Ge Na Ge | Tete Ge | Na Ge Tete Ge\nDiri Diri | Na Ke Na Ke | Diri Diri | Tete Ke Na Ke | Diri Diri | Na Ke Na Ke | Tete Ke | Na Ke Tete Ke",
            beats: 12,
            note: "Fast — 3x normal speed",
          },
          variations: [
            {
              label: "Variation — Kinar Rela",
              text: "Ta Ta Ta Ta | Dha Ge Na Ge | Ta Ta Ta Ta | Dha Ge Na Ge\nTa Ta Ta Ta | Na Ke Na Ke | Ta Ta Ta Ta | Na Ke Na Ke",
              beats: 12,
            },
          ],
        },
        tags: ["rela", "drut", "fast", "virtuoso"],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // JHAPTAL — 10 beats (2+3+2+3)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "jhaptal",
    name: "Jhaptal",
    beats: 10,
    vibhag: "2+3+2+3",
    jati: "Chatusra",
    description:
      "Jhaptal has 10 beats divided asymmetrically into four vibhags of 2, 3, 2, and 3 beats. Its uneven grouping gives it a characteristic lilt. Widely used in both instrumental and vocal classical performances.",
    compositions: [
      // ── KAYDA ─────────────────────────────────────────────────────────────
      {
        id: "jhaptal-kayda-1",
        name: "Kayda — Dhi Na",
        type: "Kayda",
        description:
          "A foundational Jhaptal Kayda exploiting the asymmetric vibhag structure. The Dhi Na pattern naturally highlights the characteristic groupings of 2 and 3.",
        difficulty: "Intermediate",
        content: {
          face: {
            label: "Face (Mukh)",
            text: "Dhi Na | Dhi Dhi Na | Dhi Na | Tete Dhi Na\nNa Na | Na Na Na | Na Na | Tete Na Na",
            beats: 10,
          },
          paltas: [
            {
              label: "Palta 1",
              text: "Dhi Dhi | Na Dhi Dhi | Na Dhi | Na Tete Dhi\nNa Na | Na Na Na | Na Na | Na Tete Na",
              beats: 10,
            },
            {
              label: "Palta 2",
              text: "Tete Dhi | Na Tete Dhi | Na Dhi | Na Dhi Na\nTete Na | Na Tete Na | Na Na | Na Na Na",
              beats: 10,
            },
            {
              label: "Palta 3",
              text: "Dhi Na Dhi | Dhi Na Dhi | Na Dhi | Na Dhi Na\nNa Na Na | Na Na Na | Na Na | Na Na Na",
              beats: 10,
            },
          ],
          tihai: {
            label: "Tihai",
            text: "Dhi Na Dhi Na — | Dhi Na Dhi Na — | Dhi Na Dhi Na — Dha",
            note: "5-beat tihai repeated 3 times = 15 beats + 1 = Sam on 16th (after 1.5 cycles)",
          },
        },
        tags: ["jhaptal", "dhi na", "asymmetric"],
      },

      // ── GAT ───────────────────────────────────────────────────────────────
      {
        id: "jhaptal-gat-1",
        name: "Gat — Rupak Ang",
        type: "Gat",
        description:
          "A Gat in Jhaptal borrowing phrases from the Rupak ang (style). The interplay between the two asymmetric halves (2+3) creates a compelling rhythmic tension.",
        difficulty: "Intermediate",
        content: {
          face: {
            label: "Face (Mukh)",
            text: "Dha Ge | Tete Dha Ge | Tete Ge | Nage Tete Ge\nNa Ke | Tete Na Ke | Tete Ke | Nage Tete Ke",
            beats: 10,
          },
          tihai: {
            label: "Tihai",
            text: "Dha Ge Tete Ge — | Dha Ge Tete Ge — | Dha Ge Tete Ge — Dha",
          },
        },
        tags: ["jhaptal", "gat", "rupak ang"],
      },

      // ── TUKDA ────────────────────────────────────────────────────────────
      {
        id: "jhaptal-tukda-1",
        name: "Tukda — Nage Tete",
        type: "Tukda",
        description:
          "A concise Tukda in Jhaptal designed for solo performance. Short, sharp, and precise — it resolves with great satisfaction on the Sam.",
        difficulty: "Beginner",
        content: {
          face: {
            label: "Face (Mukh)",
            text: "Nage Tete | Nage Dha Ge | Tete Nage | Tete Dha Dha Ge\nNage Tete | Nage Na Ke | Tete Nage | Tete Na Na Ke",
            beats: 10,
          },
          tihai: {
            label: "Tihai",
            text: "Nage Tete Dha — | Nage Tete Dha — | Nage Tete Dha",
            note: "Bedam tihai, lands on Sam",
          },
        },
        tags: ["tukda", "jhaptal", "beginner", "solo"],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // RUPAK — 7 beats (3+2+2)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "rupak",
    name: "Rupak",
    beats: 7,
    vibhag: "3+2+2",
    jati: "Trisra",
    description:
      "Rupak Taal has 7 beats with an unusual Sam on a khali (empty) beat. Its three-part structure of 3+2+2 gives it an inherently lyrical and asymmetric character, widely favoured in Bandish and Bhajan settings.",
    compositions: [
      {
        id: "rupak-kayda-1",
        name: "Kayda — Tin Na Na",
        type: "Kayda",
        description:
          "A delicate Kayda in Rupak exploiting its famous khali Sam. The composition carefully navigates the 3+2+2 structure.",
        difficulty: "Intermediate",
        content: {
          face: {
            label: "Face (Mukh)",
            text: "Tin Na Na | Dhin Na | Dhin Na\nTin Na Na | Na Na | Na Na",
            beats: 7,
          },
          paltas: [
            {
              label: "Palta 1",
              text: "Na Tin Na | Na Dhin | Na Dhin\nNa Na Na | Na Na | Na Na",
              beats: 7,
            },
            {
              label: "Palta 2",
              text: "Tin Tin Na | Dhin Dhin | Na Na\nNa Na Na | Na Na | Na Na",
              beats: 7,
            },
          ],
          tihai: {
            label: "Tihai",
            text: "Tin Na Dhin — | Tin Na Dhin — | Tin Na Dhin",
            note: "7-beat tihai × 3 lands on khali Sam",
          },
        },
        tags: ["rupak", "khali sam", "tin na na"],
      },
      {
        id: "rupak-peshkar-1",
        name: "Peshkar — Madhya",
        type: "Peshkar",
        description:
          "A medium-tempo Peshkar in Rupak Taal, demonstrating the characteristic lilt of the 3+2+2 grouping.",
        difficulty: "Advanced",
        content: {
          face: {
            label: "Face (Mukh)",
            text: "Tin — Na — Na | Dhin — Na | Dhin — Na\nTin — Na — Na | Na — Na | Na — Na",
            beats: 7,
            note: "Madhya laya",
          },
          variations: [
            {
              label: "Variation 1",
              text: "Tin Na Dhin Na | Tin Na | Dhin Na\nNa Na Na Na | Na Na | Na Na",
              beats: 7,
            },
          ],
          tihai: {
            label: "Tihai",
            text: "Tin Na Na Dhin | Tin Na Na Dhin | Tin Na Na Dhin",
          },
        },
        tags: ["rupak", "peshkar", "madhya"],
      },
      {
        id: "rupak-tukda-1",
        name: "Tukda — Tirekite",
        type: "Tukda",
        description:
          "A spirited Tukda in Rupak Taal using the Tirekite pattern to create excitement and forward momentum.",
        difficulty: "Beginner",
        content: {
          face: {
            label: "Face (Mukh)",
            text: "Tirekite | Dha Ge | Tete Ge\nTirekite | Na Ke | Tete Ke",
            beats: 7,
          },
          tihai: {
            label: "Tihai",
            text: "Tirekite Dha — | Tirekite Dha — | Tirekite Dha",
          },
        },
        tags: ["rupak", "tukda", "tirekite"],
      },
    ],
  },
];

// ─── Helper lookups ────────────────────────────────────────────────────────

export function getTaalById(id: string): Taal | undefined {
  return taals.find((t) => t.id === id);
}

export function getCompositionById(
  taalId: string,
  compositionId: string
): { taal: Taal; composition: (typeof taals)[0]["compositions"][0] } | undefined {
  const taal = getTaalById(taalId);
  if (!taal) return undefined;
  const composition = taal.compositions.find((c) => c.id === compositionId);
  if (!composition) return undefined;
  return { taal, composition };
}

export function getAllCompositions() {
  return taals.flatMap((taal) =>
    taal.compositions.map((comp) => ({ taal, composition: comp }))
  );
}

export const COMPOSITION_TYPES = [
  "Kayda",
  "Peshkar",
  "Gat",
  "Chakradhar",
  "Rela",
  "Tukda",
  "Laggi",
  "Paran",
] as const;
