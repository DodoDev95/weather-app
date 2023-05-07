import React from 'react'
import { AnimatedCurrentWeather } from './AnimatedCurrentWeather'

import './CurrentWeather.css'

export const CurrentWeather = ({ name, admin1, country, currentWeather }) => {
  console.log(currentWeather);

  if(currentWeather) {
  return (
    <div className='current-weather-container'>
      <div className='display-location'><span>{name}</span><span>{admin1}</span><span>{country}</span></div>
      <AnimatedCurrentWeather weatherCode={currentWeather.weathercode}/>
      <div className='current-temp'>{currentWeather.temperature}°C</div>
      <div className='wind-speed'></div>
    </div>
  )
}
}
