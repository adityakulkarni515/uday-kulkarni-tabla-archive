import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const COMPOSITION_TYPE_COLORS: Record<string, string> = {
  Kayda: "text-gold-300 bg-gold-400/10 border-gold-400/30",
  Peshkar: "text-blue-300 bg-blue-400/10 border-blue-400/30",
  Gat: "text-emerald-300 bg-emerald-400/10 border-emerald-400/30",
  Chakradhar: "text-purple-300 bg-purple-400/10 border-purple-400/30",
  Rela: "text-orange-300 bg-orange-400/10 border-orange-400/30",
  Tukda: "text-pink-300 bg-pink-400/10 border-pink-400/30",
  Laggi: "text-cyan-300 bg-cyan-400/10 border-cyan-400/30",
  Paran: "text-red-300 bg-red-400/10 border-red-400/30",
};

export const DIFFICULTY_COLORS: Record<string, string> = {
  Beginner: "text-green-400 bg-green-400/10",
  Intermediate: "text-yellow-400 bg-yellow-400/10",
  Advanced: "text-red-400 bg-red-400/10",
};
