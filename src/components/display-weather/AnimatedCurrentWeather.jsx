import React from 'react'
import ReactAnimatedWeather from 'react-animated-weather'

export const AnimatedCurrentWeather = ({ weatherCode }) => {

  console.log(weatherCode);

  const defaults = {
    icon: 'PARTLY_CLOUDY_NIGHT',
    color: 'gray',
    size: 100,
    animate: true
  };


  return (
    <ReactAnimatedWeather
    icon={defaults.icon}
    color={defaults.color}
    size={defaults.size}
    animate={defaults.animate}
    />
  )
}
