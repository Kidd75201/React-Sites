import React from "react";

function Joke(props) {
  console.log(props);
  return (
    <div>
      <p style={{ display: props.question ? "block" : "none" }}>
        Question: {props.question}
      </p>
      <p style={{ backgroundColor: !props.question && "#888888" }}>
        Answers: {props.punchLine}
      </p>
      <hr />
    </div>
  );
}

export default Joke;
