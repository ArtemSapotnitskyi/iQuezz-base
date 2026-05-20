// export interface Answer {
//   id: string;
//   text: string;
//   isCorrect: boolean;
// }

// export interface Question {
//   id: string;
//   text: string;
//   points: number;
//   difficulty: "Easy" | "Medium" | "Hard";
//   answers: Answer[];
// }

export interface QuizData {
  id: string;
  categorySlug: string;
  title: string;
  description: string;
  questionCount: number;
  //   questions?: Question[];
}
