import useQuizContext from "../contexts/useQuizContex";

export const RestartButton = () => {
  const { dispatch } = useQuizContext();
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "restart" })}
    >
      restart quiz
    </button>
  );
};
