// ---------------- TYPES ----------------
export type QuestionT = {
  id: string;
  question: string;
  options: string[];
  correctOption: number;
  points: number;
};

export type StateT = {
  questions: QuestionT[];
  status: "loading" | "ready" | "active" | "error" | "finished";
  index: number;
  answer: number | null;
  points: number;
  highscore: number;
  secondsRemaining: number;
};

export type ActionT =
  | { type: "dataRecived"; payload: QuestionT[] }
  | { type: "dataFailed" }
  | { type: "start" }
  | { type: "newAnswer"; payload: number }
  | { type: "nextQuestion" }
  | { type: "finish" }
  | { type: "restart" }
  | { type: "tick" };
