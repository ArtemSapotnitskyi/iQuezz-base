import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const newQuiz = await request.json();
    const filePath = path.join(
      process.cwd(),
      "data",
      "quizzes",
      "quizzes.json",
    );

    const fileContents = await fs.readFile(filePath, "utf8");
    const allQuizzes = JSON.parse(fileContents);

    allQuizzes.push(newQuiz);

    await fs.writeFile(filePath, JSON.stringify(allQuizzes, null, 2));

    return NextResponse.json(
      { message: "Quiz successfully added!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Помилка збереження квізу:", error);
    return NextResponse.json({ error: "Failed to save quiz" }, { status: 500 });
  }
}
