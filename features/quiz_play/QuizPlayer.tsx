"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, Timer, Flag, ChevronRight, Heart } from "lucide-react";
import { QuizData } from "@/data/quizzes/quiz";

interface QuizPlayerProps {
  quiz: QuizData;
  category: string;
}

export const QuizPlayer = ({ quiz, category }: QuizPlayerProps) => {
  // Стейти для логіки гри
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(30); // 30 секунд на питання
  const [isFinished, setIsFinished] = useState(false);

  // Для безпеки: якщо питань ще немає у JSON
  const questions = quiz.questions || [];
  const currentQuestion = questions[currentIndex];

  // Логіка таймера
  useEffect(() => {
    if (isFinished || questions.length === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleNextQuestion(); // Якщо час вийшов, йдемо далі
          return 30; // Скидаємо таймер
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex, isFinished, questions.length]);

  // Функція переходу до наступного питання
  const handleNextQuestion = () => {
    // Якщо користувач вибрав правильну відповідь, додаємо бали
    if (selectedAnswer && currentQuestion) {
      const isCorrect = currentQuestion.answers.find(
        (a) => a.id === selectedAnswer,
      )?.isCorrect;

      if (isCorrect) setScore((prev) => prev + currentQuestion.points);
      else setLives((prev) => Math.max(0, prev - 1)); // Віднімаємо життя
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null); // Скидаємо вибір
      setTimeLeft(30); // Скидаємо таймер
    } else {
      setIsFinished(true); // Кінець квізу
    }
  };

  const handleSkipQuestion = () => {
    // Опціонально: віднімаємо життя за скіп
    // setLives((prev) => Math.max(0, prev - 1));

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setTimeLeft(30);
    } else {
      setIsFinished(true);
    }
  };

  // Розрахунок прогресу для смужки
  const progressPercentage =
    questions.length > 0
      ? Math.round(((currentIndex + 1) / questions.length) * 100)
      : 0;

  // Екран завершення
  if (isFinished || questions.length === 0) {
    return (
      <div className="container mx-auto py-20 px-4 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Quiz Completed!</h2>
        <p className="text-xl text-gray-400 mb-8">
          Your final score:{" "}
          <span className="text-purple-500 font-bold">{score}</span>
        </p>
        <Link
          href={`/quiz/${category}`}
          className="px-8 py-4 bg-purple-600 rounded-xl font-bold hover:bg-purple-500 transition-colors"
        >
          Back to Quizzes
        </Link>
      </div>
    );
  }

  // Букви для варіантів відповідей (A, B, C, D)
  const alphabet = ["A", "B", "C", "D"];

  return (
    <div className="container mx-auto text-white p-4 font-sans">
      <header className="max-w-7xl mx-auto flex items-center justify-between mb-8">
        <Link
          href={`/quiz/${category}`}
          className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-800 bg-[#151515] hover:bg-gray-800 transition-colors"
        >
          <ChevronLeft size={20} />
        </Link>
        <h1 className="text-lg font-bold text-gray-200">{quiz.title}</h1>
        <div className="w-10"></div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left path */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Progress bar */}
          <div className="w-full">
            <div className="flex justify-between text-sm font-medium mb-2">
              <span className="text-gray-400">
                Question {currentIndex + 1} of {questions.length}
              </span>
              <span className="text-gray-400">
                {progressPercentage}% Complete
              </span>
            </div>
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-purple-500 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Question place */}
          <div className="w-full border-0 border-white/10 bg-[27272A]/20 rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full">
                {currentQuestion.points} points
              </span>
              <div
                className={`flex items-center gap-2 font-bold ${timeLeft <= 10 ? "text-red-500" : "text-purple-400"}`}
              >
                <Timer size={18} />
                <span>00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</span>
              </div>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs font-medium rounded-full">
                {currentQuestion.difficulty}
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold leading-relaxed">
              {currentQuestion.text}
            </h2>
          </div>

          {/* Answer places */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestion.answers.map((answer, index) => {
              const isSelected = selectedAnswer === answer.id;
              return (
                <button
                  key={answer.id}
                  onClick={() => setSelectedAnswer(answer.id)}
                  className={`flex items-center gap-4 p-4 border rounded-xl transition-all text-left group
                    ${
                      isSelected
                        ? "border-purple-500 bg-purple-500/10"
                        : "border-white/10 bg-[27272A]/20 hover:border-purple-500/50"
                    }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors
                    ${isSelected ? "bg-purple-500 text-white" : "bg-gray-800 text-gray-400 group-hover:text-purple-400"}
                  `}
                  >
                    {alphabet[index]}
                  </div>
                  <span className="font-medium">{answer.text}</span>
                </button>
              );
            })}
          </div>

          {/* Control Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={handleSkipQuestion} // <-- Зміна тут
              className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-xl text-[#717171] hover:text-white transition-colors font-medium"
            >
              <Flag size={18} />
              Skip
            </button>
            <button
              onClick={handleNextQuestion}
              disabled={!selectedAnswer} // Вимикаємо кнопку, якщо відповідь не обрана
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-colors
                ${selectedAnswer ? "bg-purple-600 hover:bg-purple-500" : "bg-gray-800 cursor-not-allowed opacity-50"}
              `}
            >
              {currentIndex === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Right path (Stats) */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <div className="bg-[#27272A]/40 border-0 border-white/10 rounded-xl px-6 py-12">
            <h3 className="text-xl font-bold mb-6">Quiz Stats</h3>

            <div className="flex flex-col gap-4">
              {/* Score */}
              <div className="bg-[#101010] border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-gray-400 text-sm font-medium mb-1">
                  Score
                </div>
                <div className="text-purple-500 text-xl font-bold">{score}</div>
              </div>

              {/* Lives */}
              <div className="bg-[#101010] border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-gray-400 text-sm font-medium mb-2">
                  Lives
                </div>
                <div className="flex justify-center gap-2 text-red-500">
                  {/* Малюємо кількість сердечок залежно від стейту */}
                  {[...Array(3)].map((_, i) => (
                    <Heart
                      key={i}
                      size={20}
                      fill={i < lives ? "currentColor" : "transparent"}
                      className={i >= lives ? "text-gray-700" : ""}
                    />
                  ))}
                </div>
              </div>

              {/* Progress */}
              <div className="bg-[#101010] border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-gray-400 text-sm font-medium mb-1">
                  Progress
                </div>
                <div className="text-white text-xl font-bold">
                  {currentIndex + 1}/{questions.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
