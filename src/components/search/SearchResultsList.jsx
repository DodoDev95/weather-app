import React from "react";
import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ searchResults, setResultData }) => {

  

  return (
    
    <div className="results-list">
      {searchResults.map((data, index) => {
       return <SearchResult key={index} result={data} setResultData={setResultData}/>
      })}
    </div>
  
  );
};
