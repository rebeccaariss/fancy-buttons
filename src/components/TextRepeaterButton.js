import { useState } from "react";

function TextRepeaterButton(props) {
  const [ repetitions, setRepetitions ] = useState(1);
  const spans = [];

  for (let i = 0; i < repetitions; i++) {
    spans.push(<span key={i}>I like this text</span>);
  }

  return (
    <button className="TextRepeaterButton">
      {spans}
    </button>
  );
}

export default TextRepeaterButton;