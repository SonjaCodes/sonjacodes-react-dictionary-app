import { Container } from "react-bootstrap";
import CookieConsent from "./Cookies.js";
import Dictionary from "./Dictionary.js";
import Footer from "./Footer.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <CookieConsent />
      <div className="container">
        <Container className="App-Container">
          <header className="App-header">
            <img
              src="SonjaCodesLogo.png"
              className="SonjaCodesLogo img-fluid"
              alt="SonjaCodesLogo"
            />
          </header>
          <main>
            <h1>Dictionary App</h1>

            <Dictionary />
          </main>
        </Container>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
