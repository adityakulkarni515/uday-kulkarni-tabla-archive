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

      // ══════════════════════════════════════════════════════════════════════
      // REAL COMPOSITIONS — From Guruji's Manuscript
      // Source: Pandit Uday Kulkarni's handwritten notes
      // ══════════════════════════════════════════════════════════════════════

      // ── KAYDA: Dha Kita Tita Dhagena ─────────────────────────────────────
      {
        id: "teentaal-kayda-kita-tita",
        name: "Kayda — Dha Kita Tita Dhagena",
        type: "Kayda",
        description: "A core Teentaal Kayda built on the Dha-Kita-Tita-Dhagena phrase. Six progressive paltas explore all subdivisions systematically. The khali (B) section mirrors the bayan pattern on the tabla.",
        difficulty: "Intermediate",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "Dha - kita tita dhagena | dha - dha tita dhagen | Dha tag dhingadginagina\nDhage tita kita dhita dhagena dha | dha kita tita dhagen | Dha tag tinga tina kina",
            },
            {
              label: "Palta 1",
              text: "(Dha - kita tita dhagena | dha - dha kita tita dhagen | Dha tag dhingadginagina) ×3 + Khali (B) part",
              note: "First half repeated three times, then the khali (B) section once",
            },
            {
              label: "Palta 2",
              text: "All phrases of 8 syllables × 2 times",
              note: "Dugun — each 8-syllable phrase played twice consecutively",
            },
            {
              label: "Palta 3",
              text: "All phrases of 4 syllables × 2 times",
              note: "Chatusra — 4-syllable clusters, each played twice",
            },
            {
              label: "Palta 4",
              text: "Dha ki tatita dhagena | dha - dha ki tatita | dha - ki tatita dhagena | dha - dha ki tatita\nDhagena dha tag dhina dhina gina | dhagena dha tag dhingra dhina gina",
              note: "1/2 face (khali portion follows the bayan pattern)",
            },
            {
              label: "Palta 5",
              text: "Dha - ki tatita dhagena | dha - dha ki tatita | dha kita tita | dha ki tatita\nDha - kitatita dhagena | dha - dha kitatita dhagena | dhatag tinga tina kina",
            },
            {
              label: "Palta 6",
              text: "Dha - kitatita dhagena dha",
              note: "Noted 18/07/19 — manuscript incomplete; to be completed from oral tradition",
            },
          ],
        },
        tags: ["kita tita", "dhagena", "six paltas", "core"],
      },

      // ── KAYDA: Ajrada Style ───────────────────────────────────────────────
      {
        id: "teentaal-kayda-ajrada",
        name: "Kayda — Ajrada",
        type: "Kayda",
        description: "An Ajrada-style Kayda in Teentaal featuring the characteristic Dhinga-Dhina-Gina bol pattern. Five systematic paltas with progressive phrase development.",
        difficulty: "Intermediate",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "(Dhinga dhina gina dhage tirakita dhinga dhina gina) ×2 | Dhatag gitag tingatinakina",
            },
            {
              label: "Palta 1",
              text: "Dhina ga dhiniagina dhagetirakita | (dhinagadhinagina) ×2 | 1/2 face",
              note: "Half-face (khali) follows the bayan section",
            },
            {
              label: "Palta 2",
              text: "(Dhinaga dhina gina dhinag) ×3 | dhadhagina dhinadhage tirakita | dhataggitag tinagtinakina",
            },
            {
              label: "Palta 3",
              text: "(Dhinagdhing dhinagina) ×3 | dhadhagina dhinadhage tirakita | dhataggitag tinagtinakina",
            },
            {
              label: "Palta 4",
              text: "(Dhinagadhinagina) ×2 | dhingdhing dhina gina\nDhadhagina dhinadhage tirakita | dhataggitag tinagtinakina",
            },
            {
              label: "Palta 5",
              text: "Dhingadhinagina dhagetirakita dhataga gitag | dhinagadhina dha-- gitag\nDhinagadhina dhadag gitag tinagatinakina",
            },
          ],
        },
        tags: ["ajrada", "dhinga dhina gina", "tirakita"],
      },

      // ── KAYDA: Farukhabad Gharana (Dhatraka Dhikita) ─────────────────────
      {
        id: "teentaal-kayda-farukabad-dhikita",
        name: "Kayda — Farukhabad Gharana (Dhatraka Dhikita)",
        type: "Kayda",
        description: "A Kayda from the Farukhabad Gharana tradition built on the Dhatraka-Dhikita-Gina bol pattern. The characteristic phrasing reflects the Farukhabad approach to tabla.",
        difficulty: "Intermediate",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "Dhatraka dhikita gina | dhatigina tinakina",
              note: "19:16 tempo indication",
            },
            {
              label: "Palta 1",
              text: "(Dhatrakadhikita gina) ×3 | dhatigina tinakina\nTatrakatikitakina tatrakatikita kina | dhatrakadhikita gina | dhatigina dhina gina",
            },
            {
              label: "Palta 2",
              text: "All phrases × 2 times",
              note: "All bols played in dugun (double)",
            },
            {
              label: "Palta 3",
              text: "Dhatrakadhikita gina dhatigina dhatigina | 1/2 face\nDhatraka dhikita gina dhatigina dhatigina gina | dhatidhatigina dhatigina tinakina",
            },
            {
              label: "Palta 5",
              text: "Dhatrakadhikita (gina dhatigina dhati) ×2 | gina dhatigina tinakina",
            },
          ],
        },
        tags: ["farukhabad gharana", "dhatraka", "dhikita"],
      },

      // ── KAYDA: Pt. Yogesh Samsi Workshop ─────────────────────────────────
      {
        id: "teentaal-kayda-samsi",
        name: "Kayda — Pt. Yogesh Samsi Workshop",
        type: "Kayda",
        description: "A Kayda learned in a workshop of Pt. Yogesh Samsi. Features 13 progressive paltas and an elaborate Bedam Tihai. The Dha-Gina-Dhati-Dhegane phrase is the central building block.",
        difficulty: "Advanced",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "Dha - Gina dhati dhegane dhage Tina-Gina | tinak Gina dhati dhagena dhagenakina",
            },
            {
              label: "Dohra",
              text: "(Dha - Gina dhati dhegane dhage Tina-gina) ×2\nDha - Gina dhati dhegane dhage Tina-Gina | tinak Gina dhati dhagena dhagenakina",
            },
            {
              label: "Palta 2",
              text: "Dha - Gina dhati (dhegane dhage Tina-) ×3\nGina | 1/2 face",
              note: "Middle phrase repeated three times",
            },
            {
              label: "Palta 3",
              text: "Dha-gina dhati dhagena dhatidhagena\nDhatidhagena Tina dhaatidhagena Dhage tinakina",
            },
            {
              label: "Palta 4",
              text: "Dha - Gina dhati dhegane dhage Tina-Gina | tinak Gina dhati dhagena dhage Tinagina\nTinagina dhati dhagena dhage Tina-Gina | Tina - Gina dhatidhagena dhagetinakina",
            },
            {
              label: "Palta 5",
              text: "Dha - Gina dhati dhegane dhage Tina-Gina | tinak Gina dhati dhagena dhage Tina\nDhatidhagena dhagetinna - | Dhagetinnaginatina k\nGinadhatidhagena dhage Tina kina",
            },
            {
              label: "Palta 4 (Variation)",
              text: "Dha - Gina dhati dhegane dhage Tina-Gina | tinak Gina dhati dhagena dhage Tina\nGina Tina Gina dhati dhagena dhage Tina-Gina | tinak Gina dhati dhagena dhagenakina",
              note: "Re-visiting Palta 4 with extended phrase",
            },
            {
              label: "Palta 5 (Extended)",
              text: "Dha - Gina dhati dhagena dhage Tina\nGina Tina k ginadhati dhagena dhage Tina kina\nDhati dhagena dhage tina-\nDhage Tina Gina Tina k Gina dhati dhagena dhage Tina kina",
            },
            {
              label: "Palta 7",
              text: "Dhati dhagena dhage tina-\nDhage Tina Gina Tina k Gina dhati dhagena dhage Tina kina\nGina Tina k dhagena Tina k | dhati dha Gina tinak\nGina dhatidhagena dhageTina kina",
            },
            {
              label: "Palta 8",
              text: "Dhati dhagena dhage tina-dhage Tina Gina Tina k Gina dhati dhagena dhage Tina kina\nGina - Gina dhati dhagena dhage Tina\nGina Tina k Gina dhati dhagena dhage tinakina",
            },
            {
              label: "Palta 9",
              text: "Gina - Gina dhati dhagena dhage Tina\nGina Tina k Gina dhati dhagena dhage tinakina\nGina Tina Gina Tina k Gina dhatidha\nGina Tina k ginadhatidhagena | dhage Tinakina",
            },
            {
              label: "Palta 10",
              text: "Gina Tina Gina Tina k Gina dhatidha | Gina Tina k ginadhatidhagena | dhage Tinakina\nGina dhati dhagena Tina dhagena Tina\nGina Tina k dhatidhagena dhage Tina kina",
            },
            {
              label: "Palta 11",
              text: "Gina Tina Gina Tina k Gina dhatidha | Gina Tina k ginadhatidhagena | dhage Tina k\nDhagena Tina takena Tina dhagena Tina\nGina Tina k dhatidhagena dhage Tina kina",
            },
            {
              label: "Palta 12",
              text: "Gina Tina k dhatidhagena dhage Tina kina\nKina Tina k dhatidhagena dhage dhina Gina",
            },
            {
              label: "Palta 13",
              text: "Gina Tina k dhatidhagena dhage Tina\nGinaTina k Gina dhati dha genadhage Tina kina",
            },
            {
              label: "Tihai (Bedam)",
              text: "Gina tina k Gina (dhatidhagena dhage Tina kina | Dha- dha- dha-) ×3\n— dhaatidhagena dhage Tina k dhatidha Gena dhage Tina kina\n(Gina Tina) ×2 k Gina dhati (dhagena dhagetinakina | Dha-n dha-n dha-n) ×3",
              note: "Bedam Tihai — no rest between repetitions. Resolves precisely on Sam.",
            },
          ],
        },
        tags: ["Yogesh Samsi", "workshop", "13 paltas", "bedam tihai"],
      },

      // ── KAYDA: Kddhetita ──────────────────────────────────────────────────
      {
        id: "teentaal-kayda-kddhetita",
        name: "Kayda — Kddhetita",
        type: "Kayda",
        description: "A Kayda built on the distinctive Kddhetita phrase. The 'kd' prefix creates a tight, staccato feel characteristic of this composition style.",
        difficulty: "Intermediate",
        content: {
          sections: [
            {
              label: "Face (Mukh) — A",
              text: "Dhage tita kddhetita | kd dhan kddhetita",
            },
            {
              label: "Face — A + Continuation",
              text: "Ginadhagetita kddhatita | (kddhan kddhetita ta dha) ×3",
            },
            {
              label: "A Plus",
              text: "Gina (dhagetita kddhetita | kddha_na ta dha) ×3",
              note: "A-plus section: extends the base phrase with three repetitions",
            },
          ],
        },
        tags: ["kddhetita", "staccato", "kd phrase"],
      },

      // ── KAYDA: Chatushra Jati ─────────────────────────────────────────────
      {
        id: "teentaal-kayda-chatushra",
        name: "Kayda — Chatushra Jati (Dhatirakita)",
        type: "Kayda",
        description: "A Chatushra Jati Kayda based on the Dhatirakita-Dhadhina phrase. Four paltas develop the composition across different phrase groupings.",
        difficulty: "Intermediate",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "Dhatirakita dhadhina dhadha dhina | dhatidhadha dhina\nDhati-dhatirakita dhadha tirakita | dhati dhadha tina\nTa tirakita ta tina | tata tina tati ta ta tina\nDhati- dha tirakita dhadha tirakita | dhati dhadha dhina",
            },
            {
              label: "Palta 1",
              text: "(Dhatirakitadha dhina dhadha dhina | dhati dhadha dhina) ×3\nDhati-dha tirakita dha dha tirakita dha ti dha dha tina\n(Ta tirakita ta tina ta ta tina ta ti ta ta tina) ×2\nDha tirakita dha dhina dha dha dhina\nDhati dha dha dhina dha ti - dha tirakita dha dha tirakita | dha ti dha dha dhina",
            },
            {
              label: "Palta 2",
              text: "(Dha tirakita dha dhina dha dha dhina dha ti dha dha dhina) ×2\n(Dhati-dha tirakita dha dha tirakita dhati dha dha tina) ×2\n(Ta tirakita ta tina tata tina tati tata tina) ×3\nDhati- dha tirakita dha dha tirakita dhati dha dha dhina",
            },
            {
              label: "Palta 3",
              text: "Dha tirakita dha dhina (dha dha dha dhina) ×2\nDhati-dha tirakita dhadha tirakita dhati dha dha dhina\nTa tirakita (tatata tina) ×2 | dhati-dha tirakita dhadha tirakita | dhati dhadha dhina",
            },
            {
              label: "Palta 4",
              text: "Dha tirakita dha dhina | dhadha dhina dhadha dhina dhadha\nDha ti-dha tirakita dhadha tirakita | dhati dha dha tina\nTatirakita ta tina tatata tina tatata tina dhadha\nDhati-dha tirakita dha dha tirakita | dhati dha dha dhina",
            },
          ],
        },
        tags: ["chatushra jati", "dhatirakita", "four paltas"],
      },

      // ── KAYDA: Punjab Gharana Chatushra Jati ─────────────────────────────
      {
        id: "teentaal-kayda-punjab-tita",
        name: "Kayda — Punjab Gharana Chatushra Jati (Dha Tita)",
        type: "Kayda",
        description: "A Punjab Gharana Kayda in Chatushra Jati with a characteristic Nanana-Tita-Dhita phrase. Features 12 paltas and a beautiful Bedam Tihai.",
        difficulty: "Advanced",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "Dha tita tita dhita dhagena dhage Tina gina | nanana tita dhita dhagena dhage Tina kina\nAt tita titatita take a take Tina gina | nanana tita dhita dhagena dhage dhina gina",
            },
            {
              label: "Palta 1",
              text: "(DhaTita tita dhita dhagena dhage dhage tina gina) ×3\nNanana tita dhita dhagena dhage tina kina",
            },
            {
              label: "Palta 2",
              text: "(Dha titatitadhita dhagena dhagetina gina) ×2\n(Nanana titadhita dhagena dhage tina kina) ×2",
            },
            {
              label: "Palta 3",
              text: "Dhatita titadhita dhagena dhagetina dhage tina -\nTitadhita dhagena dhage dhina gina",
            },
            {
              label: "Palta 4",
              text: "Dhatita titadhita dhagena dhage tina dhagena dhage tina gina dhagena dhage tina kina | 1/2 face",
            },
            {
              label: "Palta 5",
              text: "Dhage tina dhagena tina dhagena tina gina\nNanana tita dhita dhagena dhage tina kina",
            },
            {
              label: "Palta 6",
              text: "Dhagena tina dhage tina dhagena tina gina\nNanana tita dhita dhagena dhage tina kina",
            },
            {
              label: "Palta 7",
              text: "Dha -tita titadhita dhagena dhage tina ga\nNanana tita dhita dhagena dhage tina kina",
            },
            {
              label: "Palta 8",
              text: "(Tina -tita dhita dhagena dhagetina gina | tina -titadhita dhagena dhage tina kina) ×2",
            },
            {
              label: "Palta 9",
              text: "Tina -K titadhita dhagena dhage tina | dhage tina- titadhita dhagena dhage tina kina",
            },
            {
              label: "Palta 10",
              text: "Dha tita tita dhita dhagena dhage tina gina | nanana tita dhita dhagena dhage dhina gina\nNanana tita dhita dhagena dhage dhina gina | nanana tita dhita dhagena dhage tina kina",
            },
            {
              label: "Palta 11",
              text: "Nanana tita dhita dhagena dhage tina | dhage tina - tita dhita dhagena dhage tina kina",
            },
            {
              label: "Palta 12",
              text: "Nanana tita dhita na | nanana tita dhita na | nanana tita dhita dhagena dhage tina kina",
            },
            {
              label: "Tihai (Bedam)",
              text: "(Dhatita tita dhita dhagena dhage tina gina | nanana tita dhita dhagena dhage tina kina | dha- gina\nNanana tita dhita dhageNa dhage tina kina | dha- gina | nanana tita dhita dhagena dhage tina kina\nDha- - kat ta dha | Dha- - kat ta dha) ×3",
              note: "Bedam Tihai — three complete repetitions landing on Sam",
            },
          ],
        },
        tags: ["punjab gharana", "nanana tita", "12 paltas", "bedam tihai"],
      },

      // ── KAYDA: Tishra Jati — Dhita Dhita ─────────────────────────────────
      {
        id: "teentaal-kayda-tishra-dhita",
        name: "Kayda — Tishra Jati (Dhita Dhita)",
        type: "Kayda",
        description: "A Tishra Jati Kayda in Teentaal featuring triplet phrases. The Dhagetraka-Dhinga-Dhina-Gina pattern gives this composition its distinctive flowing character.",
        difficulty: "Advanced",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "Dhinagina dhingadhinagina | dhitadhita dhagetraka dhingadhina gina\nDhagetrakadhingadhingadhinagina | dhitadhita dhagetraka tingatinakina\nTinakina tingatinakina | titatita taketraka tingatinakina\nDhagetraka dhingadhinagina | dhitadhita dhagetraka tingatinakina",
              note: "Tishra Jati — three notes per beat (triplet feel within Teentaal)",
            },
          ],
        },
        tags: ["tishra jati", "triplet", "dhagetraka", "dhingadhinagina"],
      },

      // ── KAYDA: Dhinagina ─────────────────────────────────────────────────
      {
        id: "teentaal-kayda-dhinagina",
        name: "Kayda — Dhinagina",
        type: "Kayda",
        description: "A flowing Kayda centred on the Dhinagina bol. The sparse spacing of the phrase gives it an open, spacious quality typical of meditative tabla compositions.",
        difficulty: "Intermediate",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "Dhinagina | dhindhage | traka dhinagina | dhage | traka dhinga | dhinagina\nDhagetraka dhingdhinagina | dhinagina dhagetraka | tingatina kina",
              note: "Each syllable group has deliberate space — do not rush",
            },
          ],
        },
        tags: ["dhinagina", "spacious", "meditative"],
      },

      // ── KAYDA: Farukabad — Dhatraka Dhita Dhagena ────────────────────────
      {
        id: "teentaal-kayda-farukabad-dhatraka",
        name: "Kayda — Farukabad (Dhatraka Dhita Dhagena)",
        type: "Kayda",
        description: "A rich Farukabad Gharana Kayda with ten paltas. Built on the Dhatraka-Dhita-Dhagena pattern, each palta introduces a new subdivision or phrase extension.",
        difficulty: "Advanced",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "Dhatraka dhita dhagena dhage dhinagina dhinagina\nDhatraka dhita dhagenadhage tina kina\nTa traka tita takena take tinakina | dhinagina dhatraka dhita dhagena dhage dhina gina",
            },
            {
              label: "Palta 1",
              text: "(Dhatraka dhita dhagena dhage dhina gina dhina) ×2\nDhatraka dhita dhagena dhage dhinagina dhinagina\nDhatraka dhita dhagenadhage tina kina",
            },
            {
              label: "Palta 2",
              text: "(Dhatraka dhita dhagena dhage dhina gina) ×2 | dhinagina\nDhatraka dhita dhagena dhage dhinagina dhinagina\nDhatraka dhita dhagenadhage tina kina",
            },
            {
              label: "Palta 3",
              text: "Dhina\nDhatraka dhita dhagena dhage dhina gina\nDhatraka dhita dhagena dhage dhina gina\nDhatrakadhita dhagena dhage dhinagina dhinagina | dhatraka dhitq dhagena dhage tina kinna",
            },
            {
              label: "Palta 4",
              text: "Dhagedhinagina (dhatraka dhita dhagena) ×3 | gina\nDhatrakadhita dhagena dhage dhinagina dhinagina | dhatraka dhitq dhagena dhage tina kinna",
            },
            {
              label: "Palta 5",
              text: "Ginadhagedhinagina | dhatraka dhitadhagena | dhatrakadhitadhagena | dhatrakadhitadhagena\nDhatrakadhita dhagena dhage dhinagina dhinagina | dhatraka dhitq dhagena dhage tina kinna",
            },
            {
              label: "Palta 6a",
              text: "Gina Dhagedhinagina | dhatrakadhitadhagena | dhagedhina gina\nDhatraka dhita dhagena dhagendhinagina\nDhatrakadhita dhagena dhagedhina\nGinadhatraka dhita dhagena dhage tinakina",
            },
            {
              label: "Palta 6b",
              text: "Dhina gina dhina gina dhatraka | Dhita dhagena dhagedhinagina\nDhatrakadhita dhagena dhage dhina gina\nDhatraka dhita dhagena dhage dhina\nGina dhatraka dhita dhagena dhage tina kina",
            },
            {
              label: "Palta 7",
              text: "Gina dhatraka dhita dhagena dhage dhina - dha\nGina dhatraka dhita dhage dhina gina\nDhatrakadhita dhagena dhage dhinagina dhinagina | dhatraka dhitq dhagena dhage tina kinna",
            },
            {
              label: "Palta 8",
              text: "Gina dhatraka dhita dhagena dhage dhina -\nDhaginadhatraka dhita dhagena dhage tina kina\nKina traka tita takena take tina - dha\nDhagina dhatraka dhita dhagena dhage dhina gina",
            },
            {
              label: "Palta 9",
              text: "Dhita dhage dhina gina dhagedhinagina -dha\nGina dhatraka dhita dhagena dhage tina kina",
            },
            {
              label: "Palta 10",
              text: "Dhita dhita dhage dhina gina dhina gina - dha\nGina dhatrka dhita dhagena dhage tina kinna\nTita tita take tina kina tina kina -dha\nGina dhagena traka dhita dhagena dhage dhina gina",
            },
          ],
        },
        tags: ["farukabad", "dhatraka", "dhita dhagena", "ten paltas"],
      },

      // ── KAYDA: Punjab Gharana (32 beats — double cycle) ──────────────────
      {
        id: "teentaal-kayda-punjab-32",
        name: "Kayda — Punjab Gharana (Double Cycle, 32 beats)",
        type: "Kayda",
        description: "A Punjab Gharana Kayda spanning two complete cycles of Teentaal (32 beats). The extended phrase structure demands exceptional breath control and rhythmic memory.",
        difficulty: "Advanced",
        content: {
          sections: [
            {
              label: "Face (Mukh) — 32 beats",
              text: "Dhatraka dhitadhagena | dhatidhagena dhage dhina\nDhagena dhina - | dhatidhagena tinakina",
              note: "8+5+4+6+5+4 = 32 beats — spans exactly two cycles of Teentaal (2 × 16 = 32)",
            },
            {
              label: "Palta 2",
              text: "Palta to be completed — continues the double-cycle phrase structure",
              note: "Manuscript indicates Palta 2 to follow",
            },
          ],
        },
        tags: ["punjab gharana", "32 beats", "double cycle", "extended"],
      },

      // ── KAYDA: Bendigeri Sir — 1 ──────────────────────────────────────────
      {
        id: "teentaal-kayda-bendigeri-1",
        name: "Kayda — Bendigeri Sir 1 (Dhatita DHA Tita)",
        type: "Kayda",
        description: "First of three Kaydas from Bendigeri Sir. Built on the distinctive Dhatita-DHA-Tita-Dhatidhage pattern with Dhinagina resolution.",
        difficulty: "Intermediate",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "Dhatita DHA Tita | dhatidhage dhinagina | ginatita dhatita | dhagena dhage tinakina",
            },
          ],
        },
        tags: ["bendigeri", "dhatita", "DHA"],
      },

      // ── KAYDA: Bendigeri Sir — 2 ──────────────────────────────────────────
      {
        id: "teentaal-kayda-bendigeri-2",
        name: "Kayda — Bendigeri Sir 2 (Dhatitakita DHA)",
        type: "Kayda",
        description: "Second Kayda from Bendigeri Sir featuring the Dhatitakita-DHA-Ti-Dhagina pattern. The asymmetric phrase gives this composition its distinctive character.",
        difficulty: "Intermediate",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "Dhatitakita DHA | tidhagina dhatigina dhinagina\nTi dhagina dhatitakita DHA | titdhaginatinakina",
            },
          ],
        },
        tags: ["bendigeri", "dhatitakita"],
      },

      // ── KAYDA: Bendigeri Sir — 3 ──────────────────────────────────────────
      {
        id: "teentaal-kayda-bendigeri-3",
        name: "Kayda — Bendigeri Sir 3 (Dhatraka Dhina Gina)",
        type: "Kayda",
        description: "Third Kayda from Bendigeri Sir based on the Dhatraka-Dhina-Gina-Dhagetraka phrase. A concise, meditative Kayda.",
        difficulty: "Intermediate",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "Dhatraka dhina Gina | dhagetraka dhinagina\nDhagena dhatraka dhin_ | dhagetraka tinakina",
            },
          ],
        },
        tags: ["bendigeri", "dhatraka", "dhagetraka"],
      },

      // ── RELA: 7 & 9 (BPA / MPA) ──────────────────────────────────────────
      {
        id: "teentaal-rela-bpa",
        name: "Rela — 7 & 9 (BPA 4th yr / MPA III sem)",
        type: "Rela",
        description: "A Rela in Teentaal shared with BPA 4th year and MPA III semester students. Features Dhirdhirkittak and Tirakita patterns in Drut (fast) laya.",
        difficulty: "Advanced",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "Dhakitak dhirdhirkittak | dha-kittak Tinakittak\nTirakittak DhirDhirdhir Gidnag\nTirakita Dhatirakittak Tinnakittak",
            },
            {
              label: "Dohra 1",
              text: "(Dhakitak dhirdhirkittak | dhakitak tinnakittak dha- -) ×2 | 1/2 face",
            },
            {
              label: "Palta 2",
              text: "(Dhakitak dhirdhirkittak | dhakitak tirakittak tirakita) ×2 | 1/2 face",
            },
            {
              label: "Palta 3",
              text: "Dhakittakdhakittak | dhirdhirkittak tinnakittak\nTirakittak Dhirdhir dhirgidnag\nTirakita dhatirakittak tinnakittak",
            },
            {
              label: "Palta 4",
              text: "Dhakittakdhirdhirkittak | dhirdhirkittak dha-kittak\nTirakittak Dhirdhir dhirgidnag\nTirakita dhatirakittak tinnakittak",
            },
            {
              label: "Palta 5",
              text: "Dha-kittak dhirdhirkittak | dhakittak dhinnakittak\nTinnakittak Tirakittak | Dhirdhir dhir gidnag | tirakita tinnakittak",
            },
            {
              label: "Palta 6",
              text: "Dha-kittak dhirdhirkittak | dhakittak tirakita tinnakittak\nTirakittak dhirdhirkittak | tirakittak dhatirakittak tinnakittak",
            },
          ],
        },
        tags: ["rela", "drut", "dhirdhirkittak", "BPA", "MPA"],
      },

      // ── RELA: Teentaal 7 & 9 (Extended — 17 Paltas) ──────────────────────
      {
        id: "teentaal-rela-extended",
        name: "Rela — Teentaal 7 & 9 (Extended, 17 Paltas)",
        type: "Rela",
        description: "An extended Rela in Teentaal with 17 systematic paltas. Each palta develops a new combination of Dhirdhirkittak, Tirakita, and Kittak patterns. Composed over multiple sessions (7 Sept 2020, 8/9/2020).",
        difficulty: "Advanced",
        content: {
          sections: [
            {
              label: "Face (Mukh) — D",
              text: "Dhaki tak Dhirdhir kittak | dha kittak tinna kittak\nTirakittak Dhirdhir dhir kittak | dha tirakittak tirakitak tinna kittak\nTakittak tir tir kittak | ta kittak tinna kittak\nTirakittak Dhirdhir dhir kittak | tirakita dha tirakittak dhinna kittak",
            },
            {
              label: "Dohra",
              text: "(Dha kittak dhirdhirkittak | dha tirakitak tinna kittak tirakita) ×2 | 1/2 face",
            },
            {
              label: "Palta 2",
              text: "Dha kittak dhir dhir kittak | dha kittak tinna kittak dha - -\nKittak dhirdhirkittak | dha kittak tinna kittak dha- -\nKittak dhirdhir kittak | dha kittak tinna kittak\nTirakittak Dhirdhir dhir kittak | dha tirakittak tirakita tinna kittak",
            },
            {
              label: "Palta 3",
              text: "Dhaki tak dhirdhir kittak | dhirdhirkittak dha kittak\nTirakittak dhirdhirdhir kittak | tirakita dha tiragidnag tinnakittak",
            },
            {
              label: "Palta 4",
              text: "(Dhirdhir kittak dha kittak) ×2 | Plus D",
            },
            {
              label: "Palta 5",
              text: "(Dhirdhir kittak) ×2 | (dha kittak) ×2 | Plus D",
            },
            {
              label: "Palta 6",
              text: "Dha kittak tirakittak dhirdhirdhir kittak dha kittak | plus D",
              note: "7th September 2020",
            },
            {
              label: "Palta 7",
              text: "Kittak Dhirdhirdhir kittak | tirakittak dhirdhir kittak",
              note: "Padhant karo (practice slowly first)",
            },
            {
              label: "Palta 8",
              text: "Dhatirakita dhatirakittak | tirakittak dhirdhirdhir kittak",
              note: "8/9/2020",
            },
            {
              label: "Palta 9",
              text: "Dha-dhirdhirdhir kittak | dha-dhirdhirdhir kittak\nTirakittak dhirdhirdhir kittak | tirakita dhatiragidnag tinnakittak",
            },
            {
              label: "Palta 10",
              text: "Dha-dhirdhirdhir kittak | kittak dhirdhirdhir kittak\nTirakittak dhirdhirdhir kittak | tirakita dhatiragidnag tinnakittak",
            },
            {
              label: "Palta 11",
              text: "Kittak dhirdhirdhir kittak | Kittak dhirdhirdhir kittak\nTirakittak dhirdhirdhir kittak | tirakita dhatiragidnag tinnakittak",
            },
            {
              label: "Palta 12",
              text: "Kittak Kittak dhirdhirdhir kittak | dhirdhirdhir kittak\nTirakittak dhirdhirdhir kittak | tirakita dha tiragidnag tinna kittak",
            },
            {
              label: "Palta 13",
              text: "Kittak Kittak dhirdhir dhirdhir dhirdhir dhirdhir kittak\nTirakittak dhirdhirdhir kittak | tirakita dha tiragidnag tinna kittak",
            },
            {
              label: "Palta 14",
              text: "Dhir dhir dhir kittak | dha- dhirdhirdhir kittak\nTirakittak dhirdhirdhir kittak | tirakita dha tiragidnag tinna kittak",
            },
            {
              label: "Palta 15",
              text: "Dhakittak dhirdhir dhirdhir dhirdhir dhirdhir kittak dha\nTirakittak dhirdhirdhir kittak | tiraktak dha tiragidnag tinnakittak",
            },
            {
              label: "Palta 16",
              text: "Dhakittak dhakittak | dhirdhirdhir kittak dha kittak\nTirakittak dhirdhirdhir kittak | tirakita dha tiragidnag tinna kittak",
            },
            {
              label: "Palta 17",
              text: "Tirakittak dhirdhirdhir kittak | Tirakittak tinna kittak\nTirakittak dhirdhirdhir kittak | Tirakita dha Tiragidnag tinna kittak",
            },
          ],
        },
        tags: ["rela", "17 paltas", "dhirdhirkittak", "extended", "drut"],
      },

      // ── RELA: Tishra Jati ─────────────────────────────────────────────────
      {
        id: "teentaal-rela-tishra",
        name: "Rela — Tishra Jati",
        type: "Rela",
        description: "A Tishra Jati Rela in Teentaal — triplet phrasing within the 16-beat cycle. The interplay of Dhirdhir and Tirakita in triplet rhythm creates a unique momentum.",
        difficulty: "Advanced",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "Dha tirakita tak | dhirdhir dhir kittak tirakita | dha tirakita | takdhinagina dhinagina taktaktinakina\nTa tirakitatak | tirtir tirtir kittak tirakita | dha tirakita | takdhinagina dhinagina taktaktinakina",
              note: "Tishra Jati — triplet phrasing within Teentaal",
            },
            {
              label: "Variation 1",
              text: "(Dha tirakita tak dhirdhir dhirdhir kittak tirakita) ×3 | dha tirakita takdhinagina dhinagina taktaktinakina",
            },
            {
              label: "Variation 2",
              text: "Dhatirakitatak (dhirdhir dhirdhir kittak) ×3 | tirakita | 1/2 face",
            },
            {
              label: "Variation 3",
              text: "Dhatirakitatak (dhirdhir dhirdhir kittak) ×2 | tirakita dhatirakitatak tirakita | 1/2 face",
            },
            {
              label: "Variation 4",
              text: "Dhatirakitatak | dhira dhira kittak | dhiradhira dhiradhira kittak | dhirdhirdhir dhirdhirdhir dhirdhirkittak",
            },
            {
              label: "Variation 5",
              text: "Dhatirakittak dhirdhirkittak | dhirdhirdhir kittak dhirdhirkittak | dhirdhirdhir kittak | 1/2 face",
            },
            {
              label: "Variation 6",
              text: "Dhatirakitta (dhirdhirkittak dhirdhirdhir kittak) ×2 | 1/2 face",
            },
            {
              label: "Variation 7",
              text: "Dhatirakittak dhirdhirkittak dhirdhirkittak dhirdhir kittak | dhirdhir dhirdhir dhirdhirkittak | 1/2 face",
            },
            {
              label: "Variation 8",
              text: "Dha tirakittak dhirdhirdhirdhir kittak | dhitdhitdhitdhit kittak\nDhirdhirdhir kittak | dhitdhitdhit kittak | dhirdhir kittak | dhitdhit kittak | dhirkittak | dhitkittak | dhinagina taktak tina kina",
            },
            {
              label: "Variation 9",
              text: "Dha -- dhirdhir dhir kittak | tirakita dha tirakita | takdhinagina dhinagina taktaktinakina",
            },
            {
              label: "Variation 10",
              text: "Dhadha- dhirdhir dhir kittak | tirakita dha tirakita | takdhinagina dhinagina taktaktinakina",
            },
          ],
        },
        tags: ["tishra jati", "rela", "triplet", "dhirdhir"],
      },

      // ── RELA: Delhi Gharana ───────────────────────────────────────────────
      {
        id: "teentaal-rela-delhi",
        name: "Rela — Delhi Gharana",
        type: "Rela",
        description: "A Rela from the Delhi Gharana tradition featuring the characteristic Tirakitak-Dhira-Dhira-Kida pattern. Compact and powerful.",
        difficulty: "Advanced",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "Tirakitak dhira dhira kida | dha-gida nag dhirdhirkid tinnakittak\nTirakittak dhirdhirkid | dha gidng dha gidnag tinna kittk",
            },
          ],
        },
        tags: ["delhi gharana", "tirakitak", "dhira dhira"],
      },

      // ── RELA: Dhirdhir Chatushra Jati ─────────────────────────────────────
      {
        id: "teentaal-rela-dhirdhir",
        name: "Rela — Dhirdhir Chatushra Jati",
        type: "Rela",
        description: "A Dhirdhir Rela in Chatushra Jati (four notes per beat). A continuous torrent of Dhirdhir and Tirakita patterns in fast tempo.",
        difficulty: "Advanced",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "Dha tiragidnag tirakittak | dhirdhirdhirgidnag tinnakittak | tirakittak tirtirkittak | dhirdhirdhirgidnag tinnakittak",
              note: "Chatushra Jati — four notes per beat",
            },
          ],
        },
        tags: ["dhirdhir", "chatushra jati", "fast", "tiragidnag"],
      },

      // ── PESHKAR: Bendigeri Sir ────────────────────────────────────────────
      {
        id: "teentaal-peshkar-bendigeri",
        name: "Peshkar — Dhin-Taraka (Bendigeri Sir)",
        type: "Peshkar",
        description: "A meditative Peshkar from Bendigeri Sir featuring the Dhin-Taraka phrase pattern. The alternating Dhin and Tin halves create the classic bayan-tabla dialogue of Vilambit.",
        difficulty: "Advanced",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "Dhin-Taraka dhi na dhidhi na — | dha-k dhi dhina | Dhindhin dha -traka\nTin-traka Ti na TinTin na - - | dha-k dhi dhina | Dhindhin dha -traka",
              note: "Vilambit laya — slow and spacious",
            },
          ],
        },
        tags: ["peshkar", "dhin taraka", "vilambit", "bendigeri"],
      },

      // ── GAT: Dhagena Dha Traka Dhita ─────────────────────────────────────
      {
        id: "teentaal-gat-dhagena-dhatraka",
        name: "Gat — Dhagena Dha Traka Dhita",
        type: "Gat",
        description: "A Gat built on the Dhagena-Dhatraka-Dhita phrase. Features systematic development through phrase extension and splitting techniques.",
        difficulty: "Intermediate",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "Dhagena dhatraka dhita | tak din Nana gina\nDhita dhita dhagena dhatraka | dhita takings nanakina",
            },
            {
              label: "Variation 1",
              text: "Three times first phrase and one time second phrase",
            },
            {
              label: "Variation 2",
              text: "All phrases two times",
            },
            {
              label: "Variation 3",
              text: "(Dhagena dhatraka dhita tak dhingnanagina | Tak dhingnanagina) ×2 | dhita dhita dhagena dhatraka dhita taktinga nanakina",
            },
            {
              label: "Variation 4",
              text: "Dhagena dhatraka dhita takdhinga nanagina | takdhinga nanagina | takdhinga nanagina | 1/2 face",
            },
            {
              label: "Variation 5",
              text: "Dhagena dhatraka (dhita dhita tak dhingnanagina) | dhita | 1/2 face",
            },
            {
              label: "Variation 6",
              text: "Dhita dhagena dhatraka | (dhita dhita tak dhingnanagina) ×2 | 1/2 face",
            },
            {
              label: "Variation 7",
              text: "Dhagena dhatraka dhita tak dhingnanagina | dhita dhita takdhinga nanagina | dhita dhita | 1/2 face",
            },
            {
              label: "Variation 8",
              text: "Dhagena dhatraka dhita dhita dhita | takdhinga nanagina dhita dhita | takdhinga dhita | 1/2 face",
            },
            {
              label: "Variation 9",
              text: "Dhita tak dhingnanagina | dhita dhita takdhinga | dhita takdinga nanagina | 1/2 face",
            },
            {
              label: "Variation 10",
              text: "Dhita dhita dhita takdhinga nanagina | dhita dhita takdhinga nanagina | dhita takdhinga nanagina | 1/2 face",
            },
          ],
        },
        tags: ["dhagena", "dhatraka", "dhita", "phrase splitting"],
      },

      // ── GAT: 24 Matra ─────────────────────────────────────────────────────
      {
        id: "teentaal-gat-24matra",
        name: "Gat — 24 Matra",
        type: "Gat",
        description: "A Gat spanning 24 matras (1.5 cycles of Teentaal). The extended phrase structure creates a compelling cross-rhythmic feel.",
        difficulty: "Advanced",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "(Dhirdhirkittak takita dha) ×2 | kat dhirdhirkittak takita dha\nTi-- ta | ka--ta ga-di ga-na dha\n(Dhirdhirkittak takita dha | katdhirdhir kittakita dha | dhirdhir kat dhirdhir kat dhirdhir kat)",
              note: "24 matra — spans 1.5 cycles of Teentaal (16 + 8 beats)",
            },
          ],
        },
        tags: ["24 matra", "cross-rhythmic", "dhirdhirkittak"],
      },

      // ── GAT: Dhirdhirkittak Takita ────────────────────────────────────────
      {
        id: "teentaal-gat-dhirdhir",
        name: "Gat — Dhirdhirkittak Takita",
        type: "Gat",
        description: "A dynamic Gat in Teentaal with a Tihai calculated at 13.5 matras. The Titakata-Gadigina phrase provides melodic contrast against the rhythmic Dhirdhirkittak.",
        difficulty: "Advanced",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "(Dhirdhirkittak takita dha) ×2 | kat dhirdhirkittak takita dha -\nTitakata gadigina dha- taginna dha | itadhirdhirkittak takita dha",
            },
            {
              label: "Tihai",
              text: "Gidnagtirakita dhagidnagtirakita | dhagenA dhagenA dhagen tinna | (dhadhadha_n_) ×3",
              note: "Tihai = 13.5 matras. Bedam tihai resolving on Sam.",
            },
          ],
        },
        tags: ["gat", "dhirdhirkittak", "13.5 matra tihai"],
      },

      // ── GAT: Tishra Jati (Anokhelal Ji) ──────────────────────────────────
      {
        id: "teentaal-gat-anokhelal",
        name: "Gat — Tishra Jati (s/d, Anokhelal Ji)",
        type: "Gat",
        description: "A Tishra Jati s/d (Sawal-Jawab) Gat attributed to the tradition of Anokhelal Ji. Features Dhina-Dhina and Dhirdhir Kittak patterns in triplet feel.",
        difficulty: "Advanced",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "Kittak ta tirakittak | dha-dhinakittak dhatirakittak dhatirakittak\nDhatirakittak\nDhinadhina kittak dhagidnagtirakittak\nDha- dhirdhirkittak | tirakittak dhirdhirkid\nTa –dhina dhidhina | –dhi na dhidhina | –dhina dhidhi na",
              note: "Tishra Jati — s/d Gat",
            },
            {
              label: "Rela",
              text: "Dhatirakittak dhatirakittak | dhindhin natirakittak",
            },
            {
              label: "Fard (Pandit Kanthe Maharajji)",
              text: "Dha__gidnag dhatirakittak",
              note: "A short fard (brilliant concluding phrase) attributed to the style of Pt. Kanthe Maharaj",
            },
          ],
        },
        tags: ["tishra jati", "anokhelal", "s/d gat", "fard", "kanthe maharaj"],
      },

      // ── GAT: Anindo Ji Workshop ───────────────────────────────────────────
      {
        id: "teentaal-gat-anindo",
        name: "Gat — Anindo Chatterji Workshop (Dec 2022)",
        type: "Gat",
        description: "A composition learned in the workshop of Anindo Chatterji, December 2022. Features a distinctive Kddhit-Tirakittak phrase and ends with a Gat composed by Firoz Khan Saheb (Punjab Gharana).",
        difficulty: "Advanced",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "(GiDnag tinakitataka ta-) ×2 | dha- dhadha tuna dhadha ginatuna kittak ta\n(Dhadha tuna) ×4 | takdan taktaktaktak ta -\nDhadha kitak dhadha kitak | takda-nta dha\nKddhit- tirakittak dhadhadha\nKddhit - tirakittak dhadha kddha-n\nDhaget dhigana nagetita katan\n(Kddhit tirakittak ta dhirdhirkit dha - tu kittatak ta -) ×3",
              note: "Composition from Anindo Chatterji workshop, December 2022",
            },
            {
              label: "Gat — Firoz Khan Saheb (Punjab Gharana)",
              text: "See Punjab Gharana tradition",
              note: "Gat composed by Firoz Khan Saheb — Punjab Gharana. To be documented separately.",
            },
          ],
        },
        tags: ["anindo chatterji", "workshop 2022", "firoz khan", "punjab gharana", "kddhit"],
      },

      // ── CHAKRADHAR: Benaras Gharana ───────────────────────────────────────
      {
        id: "teentaal-chakradhar-benaras",
        name: "Chakradhar — Benaras Gharana (Played by Arvind Kumar Azad)",
        type: "Chakradhar",
        description: "A Benaras Gharana Chakradhar as played by Arvind Kumar Azad. Features the characteristic Benaras vocabulary including Takita, Dhatraka, and complex Tihai construction.",
        difficulty: "Advanced",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "Takita dhatraka dhita dhagetraka tina kina\nTi-nga ti-nga ta dhirdhirkittak ta\nTagi-nna nadhin dhin na | na dhin dhin na\nDha dhin dhin dha | dha dhin dhin dha\nTak tak tak taktin dhatraka | dhikita katagadigina dha-\nDhatrakadhikita katagaddigina dha\nDhatrakadhikita katagadigina dha",
            },
            {
              label: "Tihai",
              text: "Kata (dhatirakittak Tirakita dha-dha-dha) ×3 | 1 - 2 - 3 - Sam",
              note: "Three-part Tihai resolving on Sam",
            },
          ],
        },
        tags: ["benaras gharana", "arvind kumar azad", "chakradhar", "dhatraka"],
      },

      // ── CHAKRADHAR: Dhirdhirkittak Tak ───────────────────────────────────
      {
        id: "teentaal-chakradhar-dhirdhir",
        name: "Chakradhar — Dhirdhirkittak Tak",
        type: "Chakradhar",
        description: "A Chakradhar featuring the powerful Dhirdhirkittak phrase with a triple-repetition Tihai of Dhindhindha-Dhirdhirkittak-Dha.",
        difficulty: "Advanced",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "Dhirdhirkittak tak | dhirdhirkittak dhirdhirkittak | takita gintaran dha | dhinna traka dhit taginna Dhadhadha\nDhatina katak dhikita | dha kata-na dha",
            },
            {
              label: "Tihai",
              text: "(Dhindhindha - dhirdhirkittak dha) ×3",
              note: "Three repetitions landing on Sam",
            },
          ],
        },
        tags: ["chakradhar", "dhirdhirkittak", "gintaran"],
      },

      // ── CHAKRADHAR: Dhirdhir Katita ───────────────────────────────────────
      {
        id: "teentaal-chakradhar-katita",
        name: "Chakradhar — Dhirdhir Katita",
        type: "Chakradhar",
        description: "A compact Chakradhar centred on the Dhirdhir-Katita-Dha-Na phrase with a characteristic Tirakitakta resolution.",
        difficulty: "Advanced",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "Dhirdhir katita dha-na\nGida-na kata-na dha-kddha-n\nDhagetita kddha-na\nDhakidnag (tirakitakta – dhirdhir kid dha) ×3 --",
            },
          ],
        },
        tags: ["chakradhar", "katita", "kddha-n"],
      },

      // ── CHAKRADHAR: Kambli ────────────────────────────────────────────────
      {
        id: "teentaal-chakradhar-kambli",
        name: "Chakradhar — Kambli",
        type: "Chakradhar",
        description: "The Kambli Chakradhar — a brilliant composition featuring Dhatraka-Dhikita and Katagadigin patterns. The threefold Tihai (Dhan Dhan Dha) resolves on Sam with great impact.",
        difficulty: "Advanced",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "Kittak dhin nagetita katan | Kita ta taginDhitatagen | Dhitata dhitatatagen\nDhatrakadhikita dha | Takatakata tirakita gadigadigen\nNagetitakatan",
            },
            {
              label: "Tihai",
              text: "(Dhatraka dhikita katagadigin dhan dhan dha -) ×3",
              note: "Dhan Dhan Dha — three repetitions on Sam",
            },
          ],
        },
        tags: ["chakradhar", "kambli", "dhatraka dhikita", "dhan dhan dha"],
      },

      // ── LAGGI: Luggi Kayada ───────────────────────────────────────────────
      {
        id: "teentaal-laggi-katkat",
        name: "Luggi Kayada — Katkat Gegeti",
        type: "Laggi",
        description: "A Luggi (Laggi) Kayada in Teentaal featuring rapid Katkat-Gegeti patterns. Documented in Devanagari script. The Laggi style uses fast, light strokes creating a celebratory feel.",
        difficulty: "Advanced",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "कतकत. गेगेतीट कतकत गेगेनान. कतकत केकेति ट कतकत गेगेनाना",
              devanagari: true,
            },
            {
              label: "Palta 1",
              text: "कतकत गेगेतीट कतकत गेगेति ट. कतकत गेगेति ट कतकत गेगेनाना\nकतकत केकेति ट कतकत केकेति ट. कतकत गेगेति ट कतकत गेगेनाना",
              devanagari: true,
            },
            {
              label: "Palta 2",
              text: "कतकत गेगेति ट गेगेति ट गेगेति ट. कतकत गेगेति ट कतकत गेगेनाना\nकतकत केकेति ट केकेति ट केकेति ट. कतकत गेगेति ट कतकत गेगेनाना",
              devanagari: true,
            },
            {
              label: "Palta 3",
              text: "कतकत गेगेति ट गेगेति ट गेगेति ट. कतकत गेगेति ट कतकत गेगेनाना\nकतकत केकेति ट केकेति ट केकेति ट. कतकत गेगेति ट कतकत गेगेनाना",
              devanagari: true,
            },
            {
              label: "Palta 4",
              text: "कतगेगेति टगेगेति टकत गेगेति ट. कतकत गेगेति ट कतकत गेगेनाना\nकतकेके ति टगेगेति टकत केकेति ट. कतकत गेगेति ट कतकत गेगेनाना",
              devanagari: true,
            },
            {
              label: "Palta 5",
              text: "गेगेति ट कतगेगेति टकत गेगेति ट. कतकत गेगेति ट कतकत गेगेनाना\nकेकेति ट कतकेके ति टकत केकेति ट. कतकत गेगेति ट कतकत गेगेनाना",
              devanagari: true,
            },
          ],
          note: "Luggi (Laggi) style — light, fast strokes. Devanagari notation as documented by Guruji.",
        },
        tags: ["luggi", "laggi", "devanagari", "katkat", "fast"],
      },

      // ── UTHAN: Teentaal Bedam ─────────────────────────────────────────────
      {
        id: "teentaal-uthan-bedam",
        name: "Uthan — Teentaal Bedam",
        type: "Tukda",
        description: "An Uthan (introductory piece) in Teentaal played Bedam (without breath). Three powerful repetitions build to a climax.",
        difficulty: "Advanced",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "(Ta kittak | ta kittak | tingda natirakittak | tingd nati kdan dhati dha kittak nati\nKdan dhati dha kittak nati | Kda. Dha ti dha) ×3",
              note: "Bedam — three repetitions with no gap between. Creates a powerful crescendo.",
            },
          ],
        },
        tags: ["uthan", "bedam", "ta kittak", "introductory"],
      },

      // ── BEDAM TIHAI ────────────────────────────────────────────────────────
      {
        id: "teentaal-bedam-tihai",
        name: "Bedam Tihai — 11 Matra (½ matra gap)",
        type: "Tukda",
        description: "A precise Bedam Tihai in Teentaal calculated at 11 matras with a half-matra gap. Resolves exactly on Sam after three repetitions.",
        difficulty: "Advanced",
        content: {
          sections: [
            {
              label: "Tihai Body",
              text: "(Dhintiragidnag dhatiragidnag | tirakita dhatirakittaktirakita) ×2\nDhatirakittaktirakita dhatidha\nDhati dha dhati dha",
              note: "11 matra with ½ matra gap = (11 + ½) × 3 = 34½ matras... check calculation from Sam",
            },
          ],
        },
        tags: ["bedam tihai", "11 matra", "half matra", "precise calculation"],
      },

      // ── GAT: Shiva Stuti (Incomplete) ────────────────────────────────────
      {
        id: "teentaal-gat-shiva-stuti",
        name: "Shiva Stuti (Incomplete)",
        type: "Gat",
        description: "An incomplete devotional composition — Shiva Stuti. A rare example of tabla bols set to sacred Sanskrit text. Documented as incomplete in the manuscript.",
        difficulty: "Advanced",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "Dhirakita dhirakita dhirakdhirakdhirakdhira\nShiva shiva hara haran hara\nKatakatakatakata katan kittGang\nAtal jai\nJatila jayatujay nirankar | Savshay nival\nBambambambam bo bhaval\nGale munda mala keketaran\nDhit dhit tran ushalapal\nChanchal cnahl dhiganadan pratipatimalan\nDimidimidimidimi damrunad\nChan Chanchal chancal chandikara\nGanagananam – jananam\nKittak- taran kittak dhadan | nagetirakittak takta kat -",
              note: "Incomplete — manuscript notation ends here. Shiva Stuti: bols set to the praise of Lord Shiva.",
            },
          ],
          note: "Incomplete composition — documented as found in the manuscript.",
        },
        tags: ["shiva stuti", "incomplete", "devotional", "sacred"],
      },

      // ── TUKDA: Benaras Ang ────────────────────────────────────────────────
      {
        id: "teentaal-tukda-benaras",
        name: "Tukda — Benaras Ang",
        type: "Tukda",
        description: "A crisp Tukda in Benaras Ang (style). The Dha-Kittak and Dhatirakittak patterns are characteristic of the Benaras tabla tradition.",
        difficulty: "Intermediate",
        content: {
          sections: [
            {
              label: "Face (Mukh)",
              text: "Dha-kittak | ta-kittak | tun-kitkak dha -kittak | Tak-dhatirakittaktirakita\nKittak dhatiraktirakita Dhakatadha -\nDhatirakittaktirakita dha-kata dha\nDhatirakittaktirakita dha-kata dha-",
              note: "Benaras Ang — heavy, resonant strokes characteristic of Benaras style",
            },
          ],
        },
        tags: ["tukda", "benaras ang", "dhatirakittak"],
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
