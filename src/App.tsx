import QuestionsAppWithContext from "./QuestionsApp";
import { QuizProvider } from "./QuestionsApp/contexts/QuizProvider";

const App = () => {
  return (
    <QuizProvider>
      <QuestionsAppWithContext />
    </QuizProvider>
  );
};

export default App;
