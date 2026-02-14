import type { SearchResult, CompositionType } from "@/types";
import { taals, getAllCompositions } from "@/data/compositions";

// ─── Full-text search across all compositions ─────────────────────────────────

export function searchCompositions(
  query: string,
  taalFilter?: string | null,
  typeFilter?: CompositionType | null
): SearchResult[] {
  if (!query && !taalFilter && !typeFilter) return [];

  const q = query.toLowerCase().trim();
  const results: SearchResult[] = [];

  const allComps = getAllCompositions();

  for (const { taal, composition } of allComps) {
    // Apply taal filter
    if (taalFilter && taal.id !== taalFilter) continue;
    // Apply type filter
    if (typeFilter && composition.type !== typeFilter) continue;

    // If no query, return all filtered
    if (!q) {
      results.push({
        taalId: taal.id,
        taalName: taal.name,
        compositionId: composition.id,
        compositionName: composition.name,
        compositionType: composition.type,
        matchedIn: "name",
      });
      continue;
    }

    // Match against name
    if (
      composition.name.toLowerCase().includes(q) ||
      composition.type.toLowerCase().includes(q)
    ) {
      results.push({
        taalId: taal.id,
        taalName: taal.name,
        compositionId: composition.id,
        compositionName: composition.name,
        compositionType: composition.type,
        matchedIn: "name",
      });
      continue;
    }

    // Match against description
    if (composition.description?.toLowerCase().includes(q)) {
      results.push({
        taalId: taal.id,
        taalName: taal.name,
        compositionId: composition.id,
        compositionName: composition.name,
        compositionType: composition.type,
        matchedIn: "description",
        snippet: getSnippet(composition.description, q),
      });
      continue;
    }

    // Match against bols in content
    const bolText = extractAllBols(composition.content);
    if (bolText.toLowerCase().includes(q)) {
      results.push({
        taalId: taal.id,
        taalName: taal.name,
        compositionId: composition.id,
        compositionName: composition.name,
        compositionType: composition.type,
        matchedIn: "bol",
        snippet: getSnippet(bolText, q),
      });
      continue;
    }

    // Match taal name
    if (taal.name.toLowerCase().includes(q)) {
      results.push({
        taalId: taal.id,
        taalName: taal.name,
        compositionId: composition.id,
        compositionName: composition.name,
        compositionType: composition.type,
        matchedIn: "name",
      });
    }
  }

  return results;
}

// ─── Search only by taal name ─────────────────────────────────────────────────

export function searchTaals(query: string) {
  const q = query.toLowerCase().trim();
  return taals.filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.description?.toLowerCase().includes(q)
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function extractAllBols(content: unknown): string {
  if (!content || typeof content !== "object") return "";
  const obj = content as Record<string, unknown>;
  const parts: string[] = [];

  function traverse(val: unknown) {
    if (typeof val === "string") {
      parts.push(val);
    } else if (Array.isArray(val)) {
      val.forEach(traverse);
    } else if (val && typeof val === "object") {
      Object.values(val as Record<string, unknown>).forEach(traverse);
    }
  }

  Object.values(obj).forEach(traverse);
  return parts.join(" ");
}

function getSnippet(text: string, query: string, radius = 60): string {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text.slice(0, 100);
  const start = Math.max(0, idx - radius);
  const end = Math.min(text.length, idx + query.length + radius);
  return (start > 0 ? "…" : "") + text.slice(start, end) + (end < text.length ? "…" : "");
}
