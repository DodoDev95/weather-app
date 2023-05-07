import React from 'react'

export const CurrentWeather = ({ name, admin1, country, currentWeather }) => {
  

  return (
    <div className='current-weather-container'>
      <div className='display-location'></div>
      <div className='current-temp'></div>
      <div className='precip-probability'></div>
      <div className='wind-speed'></div>
    </div>
  )
}
