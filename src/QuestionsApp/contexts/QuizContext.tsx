import { createContext } from "react";
import { useQuiz } from "../hooks/useQuiz";

type QuizContextType = ReturnType<typeof useQuiz>;

export const QuizContext = createContext<QuizContextType | undefined>(
  undefined
);
