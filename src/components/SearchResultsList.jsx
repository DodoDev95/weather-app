import React from "react";
import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ searchResults }) => {



  return (
    
    <div className="results-list">
      {console.log(searchResults)}
      {searchResults.map((data, index) => {
       return <SearchResult key={index} result={data}/>
      })}
    </div>
  
  );
};
