import axios from "axios";
import { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState({});

  function handleResponse(response) {
    if (response.data.word) {
      setResults({
        word: response.data.word,
        phonetic: response.data.phonetic,
        meanings: response.data.meanings,
      });
    } else {
      setResults("Ooops, sadly I don't know this word...please try again! Here is a cookie for your efforts: 🍪");
    }
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    const apiKey = "a5t17f04278fdb4bf8e3eb7e4o1ab606";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <section className="Search">
        <h5>What word would you like us to look up for you?</h5>
        <form className="SearchForm" onSubmit={search}>
          <input
            type="search"
            placeholder="Search for a word..."
            className="SearchBar"
            required
            autoFocus
            onChange={handleKeywordChange}
          />
          <input className="SearchButton" type="submit" value="🔍" />
        </form>
      </section>
      <section className="Results">
        <Results results={results} />
      </section>
    </div>
  );
}
