import axios from "axios";
import { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
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
      <section>
        <h4>What word would you like us to look up for you?</h4>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Search for a word..."
            className="SearchBar"
            required
            autoFocus
            onChange={handleKeywordChange}
          />
          <input type="submit" value="Search" />
        </form>
      </section>
    </div>
  );
}
