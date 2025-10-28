import { useEffect, useReducer } from "react";
import type { ActionT, StateT } from "../types/quizT";

const SEC_PER_QUES = 30;

// ---------------- INITIAL STATE ----------------
const initialState: StateT = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: 0,
};

// ---------------- REDUCER ----------------
const reducer = (state: StateT, action: ActionT): StateT => {
  switch (action.type) {
    case "dataRecived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SEC_PER_QUES,
      };
    case "newAnswer": {
      const question = state.questions[state.index];
      const isCorrect = action.payload === question?.correctOption;
      return {
        ...state,
        answer: action.payload,
        points: isCorrect ? state.points + question.points : state.points,
      };
    }
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        status:
          state.index + 1 === state.questions.length
            ? "finished"
            : state.status,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore: Math.max(state.highscore, state.points),
      };
    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Unhandled action type");
  }
};

// ---------------- CUSTOM HOOK ----------------
export function useQuiz() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch questions
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/data/questions.json");
        const data = await res.json();
        dispatch({ type: "dataRecived", payload: data });
      } catch {
        dispatch({ type: "dataFailed" });
      }
    }
    fetchData();
  }, []);

  // Derived data
  const numQuestions = state.questions.length;
  const maxPossiblePoints = state.questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  return {
    ...state,
    dispatch,
    numQuestions,
    maxPossiblePoints,
  };
}
