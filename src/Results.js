import Stack from "react-bootstrap/Stack";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (typeof props.results === "string") {
    return <div className="text-center">{props.results}</div>;
  }
  return (
    <div className="Results">
      <Stack className="Stack" direction="vertical" gap={3}>
        <div className="p-2 word">
          <h2>{props.results.word}</h2>
        </div>
        <div className="p-2 phonetic">
          {props.results.phonetic && 
            <div>
              <h6>/{props.results.phonetic}/</h6>
            </div>
          }
        </div>
        <div className="p-2 meaning">
          {props.results.meanings?.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
                {index < props.results.meanings.length - 1 && <hr />}
              </div>
            );
          })}
        </div>
      </Stack>
    </div>
  );
}

