import useQuizContext from "../contexts/useQuizContex";

export const StartScreen = () => {
  const { numQuestions, dispatch } = useQuizContext();
  return (
    <div className="start">
      <h2>Welcome to the React quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        let's start{" "}
      </button>
    </div>
  );
};
