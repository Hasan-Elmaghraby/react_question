import { Base } from "./components/Base";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Error from "./components/Error";
import { StartScreen } from "./components/StartScreen";
import { Questions } from "./components/Questions";
import { NextButton } from "./components/NextButton";
import { Progress } from "./components/Progress";
import { FinishScreen } from "./components/FinishScreen";
import { RestartButton } from "./components/RestartButton";

import { Timer } from "./components/Timer";
import { Footer } from "./components/Footer";
import useQuizContext from "./contexts/useQuizContex";

function QuestionsAppWithContext() {
  const { status } = useQuizContext();

  return (
    <div className="app">
      <Header />
      <Base>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Questions
            // question={questions[index]}
            // dispatch={dispatch}
            // answer={answer}
            />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <>
            <FinishScreen />
            <RestartButton />
          </>
        )}
      </Base>
    </div>
  );
}

export default QuestionsAppWithContext;
