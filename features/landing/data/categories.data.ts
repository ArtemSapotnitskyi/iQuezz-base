import { StaticImageData } from "next/image";
import React from "react";

import ScienceIcon from "../../../public/landing/Category/scienceTech-icon.svg";
import MathematicsIcon from "../../../public/landing/Category/tablerMath-icon.svg";
import ChemistryIcon from "../../../public/landing/Category/chemistry-icon.svg";
import BiologyIcon from "../../../public/landing/Category/biology-icon.svg";
import GeneralKnowledgeIcon from "../../../public/landing/Category/tablerWorld-icon.svg";
import CurrentAffairsIcon from "../../../public/landing/Category/newspaper-icon.svg";

export interface CategoryItem {
  id: number;
  title: string;
  description: string;
  borderClass: string;
  iconBgClass: string;
  linkTextClass: string;
  icon: StaticImageData;
}

// Використовуємо named export (export const) та типізуємо масив як CategoryItem[]
export const categoriesData: CategoryItem[] = [
  {
    id: 1,
    title: "Science & Tech",
    description:
      "Test your knowledge in science & tech with our challenging quizzes",
    borderClass: "border-t-[#3B82F6]",
    iconBgClass: "bg-[#3B82F6]",
    linkTextClass: "text-[#3B82F6]",
    icon: ScienceIcon,
  },
  {
    id: 2,
    title: "Mathematics",
    description:
      "Test your knowledge in mathematics with our challenging quizzes",
    borderClass: "border-t-[#22C55E]",
    iconBgClass: "bg-[#22C55E]",
    linkTextClass: "text-[#22C55E]",
    icon: MathematicsIcon,
  },
  {
    id: 3,
    title: "Chemistry",
    description:
      "Test your knowledge in chemistry with our challenging quizzes",
    borderClass: "border-t-[#A855F7]",
    iconBgClass: "bg-[#A855F7]",
    linkTextClass: "text-[#A855F7]",
    icon: ChemistryIcon,
  },
  {
    id: 4,
    title: "Biology",
    description: "Test your knowledge in biology with our challenging quizzes",
    borderClass: "border-t-[#EC4899]",
    iconBgClass: "bg-[#EC4899]",
    linkTextClass: "text-[#EC4899]",
    icon: BiologyIcon,
  },
  {
    id: 5,
    title: "General Knowledge",
    description:
      "Test your knowledge in general knowledge with our challenging quizzes",
    borderClass: "border-t-[#F59E0B]",
    iconBgClass: "bg-[#F59E0B]",
    linkTextClass: "text-[#F59E0B]",
    icon: GeneralKnowledgeIcon,
  },
  {
    id: 6,
    title: "Current Affairs",
    description:
      "Test your knowledge in current affairs with our challenging quizzes",
    borderClass: "border-t-[#EF4444]",
    iconBgClass: "bg-[#EF4444]",
    linkTextClass: "text-[#EF4444]",
    icon: CurrentAffairsIcon,
  },
];
