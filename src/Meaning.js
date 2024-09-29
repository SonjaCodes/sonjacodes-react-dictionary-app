export default function Meaning(props) {
  return (
    <div className="Meaning">
      <p className="partOfSpeech fst-italic">{props.meaning.partOfSpeech}</p>
      <p>{props.meaning.definition}</p>
      <p>{props.meaning.synonyms?.join(", ")}</p>
    </div>
  );
}
