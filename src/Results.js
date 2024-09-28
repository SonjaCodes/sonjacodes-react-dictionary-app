import Stack from "react-bootstrap/Stack";
import "./Results.css";

export default function Results(props) {
  if (typeof props.results === "string") {
    return <div>{props.results}</div>;
  }
  return (
    <div className="Results">
      <h2>{props.results.word}</h2>
      <h3>{props.results.phonetic}</h3>
      <Stack className="Stack" direction="vertical" gap={3}>
        <div className="p-2">{props.results.meaning}</div>
        <div className="p-2">{props.results.meaning}</div>
        <div className="p-2">{props.results.meaning}</div>
      </Stack>
    </div>
  );
}
