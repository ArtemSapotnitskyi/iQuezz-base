import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

// 1. Імпортуємо всі іконки.
// Залежно від структури папок, шлях може бути іншим (наприклад '@/public/...' або '../public/...')
import scienceIcon from "../../public/landing/Category/scienceTech-icon.svg";
import mathIcon from "../../public/landing/Category/tablerMath-icon.svg";
import chemistryIcon from "../../public/landing/Category/chemistry-icon.svg";
import biologyIcon from "../../public/landing/Category/biology-icon.svg";
import generalIcon from "../../public/landing/Category/tablerWorld-icon.svg";
import currentIcon from "../../public/landing/Category/newspaper-icon.svg";

// 2. Створюємо інтерфейс для нашої категорії
interface QuizCategory {
  title: string;
  icon: StaticImageData;
  href: string;
}

// 3. Типізуємо масив за допомогою нашого інтерфейсу
const quizCategories: QuizCategory[] = [
  { title: "Science & Tech", icon: scienceIcon, href: "/quiz/science" },
  { title: "Mathematics", icon: mathIcon, href: "/quiz/math" },
  { title: "Chemistry", icon: chemistryIcon, href: "/quiz/chemistry" },
  { title: "Biology", icon: biologyIcon, href: "/quiz/biology" },
  { title: "General Knowledge", icon: generalIcon, href: "/quiz/general" },
  { title: "Current Affairs", icon: currentIcon, href: "/quiz/current" },
];

export const Header = () => {
  return (
    <header className="py-6 border-b-gray-800 border-b relative z-50">
      <nav className="container flex justify-between items-center mx-auto px-4">
        <div>
          <h2 className="text-2xl font-bold">
            <Link
              href="/"
              className="bg-linear-to-br border border-solid rounded-lg from-[#5813C1] to-[#C45037] bg-clip-text text-transparent"
            >
              Quizzy
            </Link>
          </h2>
        </div>

        <ul className="flex gap-7 items-center">
          <li className="text-base relative group px-4 py-3 cursor-pointer font-medium border-solid rounded-lg group-hover:bg-white group-hover:text-black transition-colors ease-in-out">
            Quiz
            <div className="absolute left-0 top-full pt-4 hidden group-hover:block transition-all duration-300">
              <div className="w-64 rounded-xl border border-gray-800 bg-[#151515] p-2 shadow-2xl flex flex-col gap-1">
                {quizCategories.map((cat, idx) => (
                  <Link
                    key={idx}
                    href={cat.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-gray-800 transition-colors group/item"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800/60 group-hover/item:bg-gray-700 transition-colors">
                      <Image
                        src={cat.icon}
                        alt={`${cat.title} icon`}
                        width={18}
                        height={18}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-200 group-hover/item:text-white transition-colors">
                      {cat.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </li>
          <li className="text-base">
            <Link
              href="/weekly-quiz"
              className="px-4 py-3 font-medium border-solid rounded-lg hover:bg-white hover:text-black transition-colors ease-in-out"
            >
              Weekly Quiz
            </Link>
          </li>
          <li className="text-base">
            <Link
              href="/rewards"
              className="px-4 py-3 font-medium border-solid rounded-lg hover:bg-white hover:text-black transition-colors ease-in-out"
            >
              Rewards
            </Link>
          </li>
          <li className="text-base">
            <Link
              href="/about"
              className="px-4 py-3 font-medium border-solid rounded-lg hover:bg-white hover:text-black transition-colors ease-in-out"
            >
              About
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-6">
          <Link
            href="/signin"
            className="px-4 py-2 bg-white text-black rounded-lg font-light hover:bg-gray-200 transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 bg-linear-to-br from-[#5813C1] to-[#C45037] text-white rounded-lg font-light hover:opacity-90 transition-opacity"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
};
