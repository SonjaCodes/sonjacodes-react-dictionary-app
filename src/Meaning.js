export default function Meaning(props) {
  return (
    <div className="Meaning">
      <p>
        <strong>{props.meaning.partOfSpeech}</strong>
      </p>
      <p>Definition: {props.meaning.definition}</p>
      {props.meaning.example && <p>Example: {props.meaning.example}</p>}
      {props.meaning.synonyms && <p>Synonyms: {props.meaning.synonyms?.join(", ")}</p>}
    </div>
  );
}
