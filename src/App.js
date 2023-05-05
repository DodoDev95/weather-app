import { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";

function App() {
  const [searchResults, setSearchResults] = useState([{}]);
  console.log(searchResults);
  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setSearchResults={setSearchResults} />
        <SearchResultsList searchResults={searchResults} />
      </div>
    </div>
  );
}

export default App;
