import useQuizContext from "../contexts/useQuizContex";

export const Progress = () => {
  const { index, numQuestions, points, maxPossiblePoints, answer } =
    useQuizContext();
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        Question <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
};
