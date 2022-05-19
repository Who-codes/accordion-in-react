import questions from "./data";
import SingleQuestion from "./SingleQuestion";
const Questions = () => {
  return questions.map((question) => (
    <SingleQuestion question={question} key={question.id} />
  ));
};

export default Questions;
