import React from 'react'
import ReactAnimatedWeather from 'react-animated-weather'

function getIconString(weathercode, dayornight) {

  switch (weathercode) {
    case 0:
    return dayornight ? "CLEAR_DAY" : "CLEAR_NIGHT";
  case 1:
  case 2:
  case 3:
    return dayornight ? "PARTLY_CLOUDY_DAY" : "PARTLY_CLOUDY_NIGHT";
  case 45:
  case 48:
    return "FOG";
  case 51:
  case 53:
  case 55:
    return "RAIN";
  case 56:
  case 57:
    return "SLEET";
  case 61:
  case 63:
  case 65:
    return "RAIN";
  case 66:
  case 67:
    return "SLEET";
  case 71:
  case 73:
  case 75:
    return "SNOW";
  case 77:
    return "SNOW";
  case 80:
  case 81:
  case 82:
    return "RAIN";
  case 85:
  case 86:
    return "SNOW";
  case 95:
    return "RAIN";
  case 96:
  case 99:
    return "SLEET";
  default:
    return "CLEAR_DAY";
  }
}

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
