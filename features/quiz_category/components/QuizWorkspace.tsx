"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { QuizData } from "@/data/quizzes/quiz";
import { categoryThemes } from "@/features/quiz_category/data/categoryThemes";

interface QuizWorkspaceProps {
  quizzes: QuizData[];
}

export const QuizWorkspace = ({ quizzes }: QuizWorkspaceProps) => {
  const [selectedQuiz, setSelectedQuiz] = useState<QuizData | null>(null);

  if (quizzes.length === 0) {
    return (
      <div className="text-gray-400 mt-10">
        No quizzes available in this category yet.
      </div>
    );
  }

  const currentTheme =
    categoryThemes[quizzes[0].categorySlug] || categoryThemes["science"];

  return (
    <div className="relative min-h-[50vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8 text-left">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            onClick={() => setSelectedQuiz(quiz)}
            className="bg-[#1A191D] rounded-xl p-6 border border-gray-800 flex gap-5 transition-transform hover:-translate-y-1 hover:border-gray-600 duration-300 cursor-pointer"
          >
            <div className="flex-shrink-0">
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center ${currentTheme.iconBgClass}`}
              >
                <Image
                  src={currentTheme.icon}
                  alt={quiz.title}
                  className="w-8 h-auto"
                />
              </div>
            </div>

            <div className="flex flex-col flex-grow justify-center">
              <h4 className="text-xl font-bold text-white mb-1">
                {quiz.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-3 line-clamp-2">
                {quiz.description}
              </p>

              <span className="text-sm font-semibold text-gray-500">
                {quiz.questionCount} Questions
              </span>
            </div>
          </div>
        ))}
      </div>
      {selectedQuiz && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="w-full max-w-lg p-8 border border-gray-800 rounded-2xl bg-[#101010] shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              {selectedQuiz.title}
            </h2>
            <p className="text-gray-300 mb-6">{selectedQuiz.description}</p>

            <div className="flex justify-between items-center mb-8 bg-gray-900 p-4 rounded-lg">
              <span className="text-gray-400">Total questions:</span>
              <span className="text-white font-bold">
                {selectedQuiz.questionCount}
              </span>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setSelectedQuiz(null)}
                className="px-6 py-3 border border-gray-700 rounded-lg text-white w-full hover:bg-gray-800 transition-colors"
              >
                Cancel
              </button>
              <Link
                href={`/quiz/${selectedQuiz.categorySlug}/${selectedQuiz.id}`}
                className={`flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium w-full ${currentTheme.iconBgClass} hover:opacity-90 transition-opacity`}
              >
                Start Quiz
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
