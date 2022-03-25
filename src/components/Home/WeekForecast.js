/*--------This component presents a table with the forecast for the rest of the week ----------*/


import axios from "axios";
import { useEffect, useState } from "react";

/*Function that recommends best time to go outside 
(the max temperature of the day)*/
function getBestTime(weekweather, day) {
  var maxTemp = 0;
  var maxTempIndex = 0;
  for (let j = 0;j<24;j++) { 
    if (weekweather[day].day.maxtemp_c === weekweather[day].hour[j].temp_c)
    {
      maxTemp = weekweather[day].hour[j].temp_c;
      maxTempIndex = j
    }
  }
  maxTempIndex++;
  var maxTempTime = "";
  if (maxTempIndex > 12)
  {
    maxTempIndex -= 12;
    maxTempTime = maxTempIndex.toString() + "pm"
  }
  else{
    maxTempTime = maxTempIndex.toString() + "am"
  }
  return [maxTempTime, maxTemp];
}

const WeekForcast = ({title}) => {
  var [weekweather,setWeekWeather] = useState([]);
  useEffect(() => {
  axios({
    method: "GET",
    url: `http://api.weatherapi.com/v1/forecast.json?key=a687b91c1f244684a4e174356222003&q=London&days=7&aqi=no&alerts=no`,
  }).then((response) => {
    setWeekWeather(response.data.forecast.forecastday);
    });
  }, []);

  return (
    <div className="weathertable">
    <table>
      <thead>
        <tr>
          <td></td>
          <td>Best Outdoor Time</td>
          <td>Forecast</td>
        </tr>
      </thead>
      {weekweather.slice(1).map((day, i) =>(
      <tr>
        <td>{new Intl.DateTimeFormat('en-GB', { dateStyle: 'full'}).format(day.date_epoch * 1000).split(",")[0] }</td>
        <td>{getBestTime(weekweather, i)[0]}   ({Math.round(getBestTime(weekweather, i)[1])+"°C"})</td>
        <td>
          <img src={"http://"+day.day.condition.icon} alt="Weather Icon"/>
          {Math.round(day.day.avgtemp_c)+"°C"}
        </td>
      </tr>
      ))}

    </table>
    </div>

  )
}

export default WeekForcast