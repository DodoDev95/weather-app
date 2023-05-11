import React from 'react'
import { AnimatedCurrentWeather } from './AnimatedCurrentWeather'

import './CurrentWeather.css'

export const CurrentWeather = ({ name, admin1, country, currentWeather }) => {

  if(currentWeather) {
  return (
    <div className='current-weather-container'>
      <div className='display-location'><span>{name}</span><span>{admin1}</span><span>{country}</span></div>
      <AnimatedCurrentWeather weatherCode={currentWeather.weathercode} dayOrNight={currentWeather.is_day}/>
      <div className='current-temp'><span>Current temp.</span>
        {currentWeather.temperature}°C</div>
      <div className='wind-speed'><span>Wind speed</span>
        {currentWeather.windspeed} m/s</div>
    </div>
  )
}
}
