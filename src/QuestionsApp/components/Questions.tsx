import { Options } from "./Options";

import useQuizContext from "../contexts/useQuizContex";

export const Questions = () => {
  const { questions, answer, dispatch, index } = useQuizContext();
  return (
    <div>
      <h4>{questions[index].question}</h4>
      <Options
        question={questions[index]}
        dispatch={dispatch}
        answer={answer}
      />
    </div>
  );
};
