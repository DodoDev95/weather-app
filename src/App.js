import { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/search/SearchBar";
import { SearchResultsList } from "./components/search/SearchResultsList";
import { DisplayWeather } from "./components/display-weather/DisplayWeather";

function App() {
  const [searchResults, setSearchResults] = useState([{}]);
  const [resultData, setResultData] = useState();
  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setSearchResults={setSearchResults} />
        <SearchResultsList
          searchResults={searchResults}
          setResultData={setResultData}
        />
      </div>
      <DisplayWeather geoData={resultData} />
    </div>
  );
}

export default App;
