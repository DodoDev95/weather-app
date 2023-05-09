import React from "react";
import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ searchResults, setResultData, setHideResults, hideResults}) => {


if(searchResults) {
  return (
    
    <div className={`results-list ${hideResults ? "" : "hide"}`}>
      {searchResults.map((data, index) => {
       return <SearchResult key={index} result={data} setResultData={setResultData} setHideResults={setHideResults} />
      })}
    </div>
  
  );
}
};
