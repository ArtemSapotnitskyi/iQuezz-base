// src/data/categoryThemes.ts
import { StaticImageData } from "next/image";
import ScienceIcon from "../../../public/landing/Category/scienceTech-icon.svg";
import MathematicsIcon from "../../../public/landing/Category/tablerMath-icon.svg";
import ChemistryIcon from "../../../public/landing/Category/chemistry-icon.svg";
import BiologyIcon from "../../../public/landing/Category/biology-icon.svg";
import GeneralKnowledgeIcon from "../../../public/landing/Category/tablerWorld-icon.svg";
import CurrentAffairsIcon from "../../../public/landing/Category/newspaper-icon.svg";

export interface CategoryTheme {
  iconBgClass: string;
  icon: StaticImageData;
}

export const categoryThemes: Record<string, CategoryTheme> = {
  science: { iconBgClass: "bg-[#3B82F6]", icon: ScienceIcon },
  math: { iconBgClass: "bg-[#22C55E]", icon: MathematicsIcon },
  chemistry: { iconBgClass: "bg-[#A855F7]", icon: ChemistryIcon },
  biology: { iconBgClass: "bg-[#EC4899]", icon: BiologyIcon },
  general: { iconBgClass: "bg-[#F59E0B]", icon: GeneralKnowledgeIcon },
  current: { iconBgClass: "bg-[#EF4444]", icon: CurrentAffairsIcon },
};
