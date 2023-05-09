import React from 'react'
import "./SearchResult.css"

export const SearchResult = ({ result, setResultData, setHideResults}) => {

  const handleSetResult = () => {
    if(result !== undefined) {
      setResultData(result);
      setHideResults(""); 
    }
  };
  
  return (
    <div className='search-result' onClick={handleSetResult}>
      {result.name} {result.country_code} {result.admin1}
    </div>
  )
}
