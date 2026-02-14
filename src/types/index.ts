// ─── Core Composition Types ───────────────────────────────────────────────────

export type CompositionType =
  | "Kayda"
  | "Peshkar"
  | "Gat"
  | "Chakradhar"
  | "Rela"
  | "Tukda"
  | "Laggi"
  | "Paran";

// A single line / section of bols
export interface BolLine {
  label?: string; // e.g. "Face", "Palta 1", "Tihai"
  text: string;   // the bol text
  beats?: number; // optional beat count for this line
  note?: string;  // performance note / annotation
}

// ─── Composition Structures ───────────────────────────────────────────────────

export interface KaydaContent {
  face: BolLine;
  paltas: BolLine[];
  tihai: BolLine;
}

export interface PeshkarContent {
  face: BolLine;
  variations: BolLine[];
  tihai: BolLine;
}

export interface GatContent {
  face: BolLine;
  tihai: BolLine;
  note?: string;
}

export interface ChakradharContent {
  part1: BolLine;
  part2: BolLine;
  part3: BolLine;
  tihai: BolLine;
}

export interface RelaContent {
  face: BolLine;
  variations?: BolLine[];
}

export interface TukdaContent {
  face: BolLine;
  tihai: BolLine;
}

export type CompositionContent =
  | KaydaContent
  | PeshkarContent
  | GatContent
  | ChakradharContent
  | RelaContent
  | TukdaContent;

// ─── Main Composition Entity ──────────────────────────────────────────────────

export interface Composition {
  id: string;
  name: string;
  type: CompositionType;
  description?: string;
  content: CompositionContent;
  tags?: string[];
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
  createdAt?: string;
}

// ─── Taal Entity ─────────────────────────────────────────────────────────────

export interface Taal {
  id: string;
  name: string;
  beats: number;
  vibhag: string; // e.g. "4+4+4+2" for Teentaal
  jati?: string;  // e.g. "Chatusra" (4 beats per vibhag)
  description?: string;
  compositions: Composition[];
}

// ─── Search & Filter ──────────────────────────────────────────────────────────

export interface SearchResult {
  taalId: string;
  taalName: string;
  compositionId: string;
  compositionName: string;
  compositionType: CompositionType;
  matchedIn: "name" | "bol" | "description";
  snippet?: string;
}

export interface FilterState {
  taalId: string | null;
  compositionType: CompositionType | null;
  difficulty: string | null;
  searchQuery: string;
}

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
