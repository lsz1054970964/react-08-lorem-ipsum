import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(count);
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h2>lorem ipsum project</h2>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max={data.length}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        ></input>
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
