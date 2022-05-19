import questions from "./data";
const Questions = () => {
  return (
    <main>
      {questions.map((question) => (
        <p>{question.title}</p>
      ))}
    </main>
  );
};

export default Questions;
