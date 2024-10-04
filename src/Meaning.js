import { useState } from "react";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  const [showExample, setShowExample] = useState(false);

  const handleMouseOver = () => {
    setShowExample(true);
  };

  const handleMouseOut = () => {
    setShowExample(false);
  };

  return (
    <div
      className="Meaning"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      <h4>
        <i>{props.meaning.partOfSpeech}</i>
      </h4>
      <p>{props.meaning.definition}</p>
      {props.meaning.synonyms && (
        <p className="synonyms">
          <u>Synonyms</u>: {props.meaning.synonyms?.join(", ")}
        </p>
      )}
      <Example example={props.meaning.example} show={showExample} />
    </div>
  );
}