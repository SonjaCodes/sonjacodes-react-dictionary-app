export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>
        <i>{props.meaning.partOfSpeech}</i>
      </h4>
      <p>Definition: {props.meaning.definition}</p>
      {props.meaning.example && <p>Example: "{props.meaning.example}"</p>}
      {props.meaning.synonyms && (
        <p>Synonyms: {props.meaning.synonyms?.join(", ")}</p>
      )}
    </div>
  );
}
