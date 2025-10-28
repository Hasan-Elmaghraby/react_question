
import { useQuiz } from "../hooks/useQuiz";
import { QuizContext } from "./QuizContext";


type QuizProviderProps = {
  children: React.ReactNode;
};

export const QuizProvider = ({ children }: QuizProviderProps) => {
  const value = useQuiz();
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
