// app/quiz/[category]/[id]/page.tsx
import fs from "fs/promises";
import path from "path";
import { QuizData } from "@/data/quizzes/quiz";
import { QuizPlayer } from "@/features/quiz_play/components/QuizPlayer";

export default async function PlayQuizPage({
  params,
}: {
  // Обертаємо params у Promise для Next.js 15+
  params: Promise<{ category: string; id: string }>;
}) {
  // Дістаємо категорію та ID з URL (наприклад: category="science", id="sci-1")
  const { category, id } = await params;

  let currentQuiz: QuizData | null = null;

  try {
    // 1. Вказуємо шлях до JSON файлу
    const filePath = path.join(
      process.cwd(),
      "data",
      "quizzes",
      "quizzes.json",
    );

    // 2. Читаємо файл і парсимо його
    const fileContents = await fs.readFile(filePath, "utf8");
    const allQuizzes: QuizData[] = JSON.parse(fileContents);

    // 3. Шукаємо квіз, де id співпадає з тим, що в URL
    currentQuiz = allQuizzes.find((quiz) => quiz.id === id) || null;
  } catch (error) {
    console.error("Помилка читання файлу квізів:", error);
  }

  // Якщо квіз з таким ID не знайдено (наприклад, хтось ввів неправильний URL)
  if (!currentQuiz) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold text-red-500">Quiz not found!</h1>
        <p className="text-gray-400">We couldn't find a quiz with ID: {id}</p>
      </div>
    );
  }

  // Якщо квіз знайдено, передаємо його в наш красивий плеєр
  return <QuizPlayer quiz={currentQuiz} category={category} />;
}
