import "./Example.css";

export default function Example(props) {
  if (!props.example) {
    return (
      <div
        className={`example-box ${props.show ? "show" : "hide"}`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "var(--sonjacodes-brand-color-secondary)",
          border: "1px solid #ddd",
          zIndex: 1,
        }}>
        <div className="example-text">
          🙅🏼‍♀️ <i>I am sorry, there is no example available...</i>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`example-box ${props.show ? "show" : "hide"}`}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "var(--sonjacodes-brand-color-secondary)",
        border: "1px solid #ddd",
        zIndex: 1,
      }}>
      <div className="example-text">
        <i>
          <u>Example</u>: "{props.example}"
        </i>
      </div>
    </div>
  );
}
