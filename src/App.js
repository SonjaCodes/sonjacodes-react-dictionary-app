import { Container } from "react-bootstrap";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Container className="App-Container">
          <header className="App-header">
            <img
              src="SonjaCodesLogo.png"
              className="SonjaCodesLogo img-fluid"
              alt="SonjaCodesLogo"
            />
          </header>
          <body>
            <h1>SonjaCodes React Dictionary App</h1>
          </body>
        </Container>
        <footer className="Footer">
          This project was coded with love by{" "}
          <a
            href="https://github.com/SonjaCodes"
            target="_blank"
            rel="noreferrer">
            Sonja Kolmer
          </a>
          . It is open-sourced on{" "}
          <a
            href="https://github.com/SonjaCodes/sonjacodes-react-dictionary-app"
            target="_blank"
            rel="noreferrer">
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://app.netlify.com/sites/sonjacodes-react-dictionary-app/overview"
            target="_blank"
            rel="noreferrer">
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
