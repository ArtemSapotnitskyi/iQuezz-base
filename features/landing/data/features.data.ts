import { StaticImageData } from "next/image";

// Icons
import PersonalizedIcon from "../../../public/landing/Features/lucideBrain-icon.svg";
import RewardIcon from "../../../public/landing/Features/iconamoonGift-icon.svg";
import TeacherIcon from "../../../public/landing/Features/tablerUsers-icon.svg";
import ProgressIcon from "../../../public/landing/Features/chartBar-icon.svg";
import LeaderboardsIcon from "../../../public/landing/Features/tablertrophy-icon.svg";
import MobileIcon from "../../../public/landing/Features/mynauiMobile-icon.svg";

export interface FeaturesItem {
  id: number;
  title: string;
  description: string;
  bgColorIcon: string;
  icon: StaticImageData;
}

export const featuresData: FeaturesItem[] = [
  {
    id: 1,
    title: "Personalized Learning",
    description:
      "Adaptive quizzes that adjust to your knowledge level and learning pace",
    bgColorIcon: "bg-[#261544]",
    icon: PersonalizedIcon,
  },
  {
    id: 2,
    title: "Reward System",
    description: "Earn points, badges, and real rewards for your achievements",
    bgColorIcon: "bg-[#432521]",
    icon: RewardIcon,
  },
  {
    id: 3,
    title: "Personalized Learning",
    description:
      "Comprehensive tools for educators to create and manage quizzes",
    bgColorIcon: "bg-[#1D2B44]",
    icon: TeacherIcon,
  },
  {
    id: 4,
    title: "Progress Tracking",
    description:
      "Adaptive quizzes that adjust to your knowledge level and learning pace",
    bgColorIcon: "bg-#183826]",
    icon: ProgressIcon,
  },
  {
    id: 5,
    title: "Competitive Leaderboards",
    description: "Compete with peers and climb the ranks in various categories",
    bgColorIcon: "bg-#45321A]",
    icon: LeaderboardsIcon,
  },
  {
    id: 6,
    title: "Mobile Friendly",
    description: "Access quizzes anytime, anywhere on any device",
    bgColorIcon: "bg-[#332244]",
    icon: MobileIcon,
  },
];
