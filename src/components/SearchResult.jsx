import React from 'react'
import "./SearchResult.css"

export const SearchResult = ({ result }) => {
  
  return (
    <div className='search-result'>
      {result.name}, {result.country_code}, {result.admin1}
    </div>
  )
}
