import Stack from "react-bootstrap/Stack";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (typeof props.results === "string") {
    return <div>{props.results}</div>;
  }
  return (
    <div className="Results">
      <Stack className="Stack" direction="vertical" gap={3}>
        <div className="p-2 word">
          <h2>{props.results.word}</h2>
        </div>
        <div className="p-2 phonetic">
          <h4>{props.results.phonetic}</h4>
        </div>
        <div className="p-2 meaning">
          {props.results.meanings?.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </Stack>
    </div>
  );
}
