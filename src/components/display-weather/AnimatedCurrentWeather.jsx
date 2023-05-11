import React from 'react'
import ReactAnimatedWeather from 'react-animated-weather'
import { getIconString } from '../utils/getIconStringHelper'


export const AnimatedCurrentWeather = ({ weatherCode, dayOrNight  }) => {

  
  const iconString = getIconString(weatherCode, dayOrNight)
  


  return (
    <ReactAnimatedWeather
    icon={iconString}
    color={"gray"}
    size={100}
    animate={true}
    />
  )
}
