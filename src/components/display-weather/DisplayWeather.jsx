import React, { useEffect, useState } from 'react'
import { CurrentWeather } from './CurrentWeather'
import { DailyWeather } from './DailyWeather'
import './DisplayWeather.css'

export const DisplayWeather = ({ geoData }) => {


  const [currentWeather, setCurrentWeather] = useState();
  const [dailyWeather, setDailyWeather] = useState();
 
  
  const fetchWeather = async () => {
    if(geoData !== undefined) {
   const data = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${geoData.latitude}&longitude=${geoData.longitude}&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max&current_weather=true&timezone=${geoData.timezone}`)
   const { current_weather, daily } = await data.json();
  return setCurrentWeather(current_weather), setDailyWeather(daily);
    
   }
  }

  useEffect(() => {
    fetchWeather();
  }, [geoData]);

  if(geoData) {
  return (
    <div className='weather-display'>
      <CurrentWeather {...geoData} currentWeather={currentWeather}/>
      <div className='daily-weather-container'>
      {dailyWeather &&
      dailyWeather?.time?.map((time, index) => {
        return (
          <DailyWeather
          key={index}
          time={time}
          maxTemp={dailyWeather.temperature_2m_max[index]}
          minTemp={dailyWeather.temperature_2m_min[index]}
          sunrise={dailyWeather.sunrise[index]}
          sunset={dailyWeather.sunset[index]}
          precipitation={dailyWeather.precipitation_probability_max[index]}
          />
        )
      })} 
      </div>
    </div>
  )
}
else {
  return (
    <div className='welcome-message'>
      <h1>Welcome to my weather app!</h1>
      <h2>To display weather data, type in a name of a city</h2>
    </div>
  )
}
}
