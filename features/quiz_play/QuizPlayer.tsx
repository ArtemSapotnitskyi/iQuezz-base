import React from "react";
import Link from "next/link";
import { ChevronLeft, Timer, Flag, ChevronRight, Heart } from "lucide-react";

export const QuizPlayer = () => {
  return (
    <div className="contaiter">
      <header className="max-w-7xl mx-auto flex items-center justify-between mb-8">
        <Link
          href="/quiz"
          className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-800 bg-[#151515] hover:bg-gray-800 transition-colors"
        >
          <ChevronLeft size={20} />
        </Link>
        <h1 className="text-lg font-bold text-gray-200">
          Science & Technology Quiz
        </h1>
        <div className="w-10"></div>
      </header>
      {/* Main Content */}
      <div className="mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left path */}
        <div></div>
      </div>
    </div>
  );
};
