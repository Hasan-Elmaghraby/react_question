import useQuizContext from "../contexts/useQuizContex";

let emogi: string;
export const FinishScreen = () => {
  const {
    points,
    highscore,

    maxPossiblePoints,
  } = useQuizContext();
  const percentage = Math.ceil((points / maxPossiblePoints) * 100);
  if (percentage === 100) emogi = "🥇";
  if (percentage >= 80 && percentage < 100) emogi = "🎉";
  if (percentage >= 50 && percentage < 80) emogi = "😃";
  if (percentage >= 0 && percentage < 50) emogi = "😔";
  if (percentage === 0) emogi = "😱";
  return (
    <>
      <p className="result">
        <span>{emogi}</span> You Scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints}({percentage}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
    </>
  );
};
