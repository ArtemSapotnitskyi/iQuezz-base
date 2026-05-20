import fs from "fs/promises";
import path from "path";
import { QuizData } from "@/data/quizzes/quiz";
import { QuizWorkspace } from "@/features/quiz_category/components/QuizWorkspace";

export default async function QuizCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  let filteredQuizzes: QuizData[] = [];

  try {
    const filePath = path.join(
      process.cwd(),
      "data",
      "quizzes",
      "quizzes.json",
    );
    const fileContents = await fs.readFile(filePath, "utf8");

    const allQuizzes: QuizData[] = JSON.parse(fileContents);

    filteredQuizzes = allQuizzes.filter(
      (quiz) => quiz.categorySlug === category,
    );
  } catch (error) {
    console.error("Помилка читання:", error);
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold capitalize text-white mb-8">
        {category} Quizzes
      </h1>

      <QuizWorkspace quizzes={filteredQuizzes} />
    </div>
  );
}
