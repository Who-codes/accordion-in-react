import questions from "./data";
import SingleQuestion from "./SingleQuestion";

function App() {
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => (
            <SingleQuestion {...question} key={question.id} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
