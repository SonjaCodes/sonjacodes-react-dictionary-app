import "./Results.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>
        <i>{props.meaning.partOfSpeech}</i>
      </h4>
      <p>{props.meaning.definition}</p>
      {props.meaning.example && (
        <p className="example">
          <i>
            <u>Example</u>: "{props.meaning.example}"
          </i>
        </p>
      )}
      {props.meaning.synonyms && (
        <p className="synonyms">
          <u>Synonyms</u>: {props.meaning.synonyms?.join(", ")}
        </p>
      )}
    </div>
  );
}
