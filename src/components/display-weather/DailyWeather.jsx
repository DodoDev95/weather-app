import React from "react";
import "./DailyWeather.css";
import sunriseImage from "../../sun_icons/sunrise.png";
import sunsetImage from "../../sun_icons/sunset.png";

export const DailyWeather = (props) => {
  const sunrise = new Date(props.sunrise).toLocaleTimeString([], {
    timeStyle: "short",
  });
  const sunset = new Date(props.sunset).toLocaleTimeString([], {
    timeStyle: "short",
  });
  const forecastDateWeekday = new Date(props.time).toLocaleDateString("en-US", {
    weekday: "short",
  });
  const forecastDateMonth = new Date(props.time).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  if (props) {
    return (
      <>
        <div className="each-date-container">
          <div className="date">
            <p className="weekday">{forecastDateWeekday}</p>
            <p className="month-day">{forecastDateMonth}</p>
          </div>
          <div className="sunrise-sunset">
            <p>
              <img src={sunriseImage} alt="sunrise-icon" /> {sunrise}
            </p>

            <p>
              <img src={sunsetImage} alt="sunset-icon" /> {sunset}
            </p>
          </div>
          <div className="day-data-card">
            <p className="card-desc">Max Temp.</p>
            <p className="weather-info">{props.maxTemp}°C</p>
          </div>
          <div className="day-data-card">
            <p className="card-desc">Min Temp.</p>
            <p className="weather-info">{props.minTemp}°C</p>
          </div>
          <div className="day-data-card">
            <p className="card-desc">Precip.</p>
            <p className="weather-info">{props.precipitation}%</p>
          </div>
        </div>
      </>
    );
  }
};
