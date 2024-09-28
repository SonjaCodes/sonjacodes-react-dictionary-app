import { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}...`);
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
