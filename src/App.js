import { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/search/SearchBar";
import { SearchResultsList } from "./components/search/SearchResultsList";
import { DisplayWeather } from "./components/display-weather/DisplayWeather";

function App() {
  const [searchResults, setSearchResults] = useState([{}]);
  const [resultData, setResultData] = useState();
  const [hideResults, setHideResults] = useState("");

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar
          setSearchResults={setSearchResults}
          setHideResults={setHideResults}
        />
        <SearchResultsList
          hideResults={hideResults}
          setHideResults={setHideResults}
          searchResults={searchResults}
          setResultData={setResultData}
        />
      </div>
      <DisplayWeather geoData={resultData} />
    </div>
  );
}

export default App;
