import type { Composition, GenericContent, KaydaContent, PeshkarContent, GatContent, ChakradharContent, RelaContent, TukdaContent } from "@/types";
import { KaydaView } from "./KaydaView";
import { PeshkarView } from "./PeshkarView";
import { GatView } from "./GatView";
import { ChakradharView } from "./ChakradharView";
import { RelaView } from "./RelaView";
import { TukdaView } from "./TukdaView";
import { GenericView } from "./GenericView";

interface CompositionRendererProps {
  composition: Composition;
}

function isGenericContent(content: unknown): content is GenericContent {
  return (
    typeof content === "object" &&
    content !== null &&
    "sections" in content &&
    Array.isArray((content as GenericContent).sections)
  );
}

export function CompositionRenderer({ composition }: CompositionRendererProps) {
  // GenericContent takes priority — used for all real manuscript compositions
  if (isGenericContent(composition.content)) {
    return <GenericView content={composition.content} />;
  }

  switch (composition.type) {
    case "Kayda":
      return <KaydaView content={composition.content as KaydaContent} />;
    case "Peshkar":
      return <PeshkarView content={composition.content as PeshkarContent} />;
    case "Gat":
      return <GatView content={composition.content as GatContent} />;
    case "Chakradhar":
      return <ChakradharView content={composition.content as ChakradharContent} />;
    case "Rela":
      return <RelaView content={composition.content as RelaContent} />;
    case "Tukda":
      return <TukdaView content={composition.content as TukdaContent} />;
    default:
      return (
        <div className="text-parchment-400/50 text-sm italic py-8 text-center">
          Viewer for &ldquo;{composition.type}&rdquo; compositions coming soon.
        </div>
      );
  }
}
