export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>
        <i>{props.meaning.partOfSpeech}</i>
      </h4>
      <p>
        <u>Definition</u>: {props.meaning.definition}
      </p>
      {props.meaning.example && (
        <p>
          <u>Example</u>: "{props.meaning.example}"
        </p>
      )}
      {props.meaning.synonyms && (
        <p>
          <u>Synonyms</u>: {props.meaning.synonyms?.join(", ")}
        </p>
      )}
    </div>
  );
}
