import axios from "axios";
import { useEffect, useState } from "react";
import moment from 'moment';

function getBestTime(response, day) {
  var maxTemp = 0;
  var maxTempIndex = 0;
  for (let j = 0;j<24;j++) { 
    if (response.data.forecast.forecastday[day].day.maxtemp_c == response.data.forecast.forecastday[day].hour[j].temp_c)
    {
      maxTemp = response.data.forecast.forecastday[day].hour[j].temp_c;
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


const Boxy = () => {
  var [temp,setTemp] = useState("temp");
  var [icon,setIcon] = useState("10d");
  var [desc, setDesc] = useState("desc")
  var [date, setDate] = useState("time");
  var [bestTime,setBestTime] = useState("");
  var [bestTemp,setBestTemp] = useState("");
  
  useEffect(() => {
  axios({
    method: "GET",
    url: `http://api.weatherapi.com/v1/forecast.json?key=a687b91c1f244684a4e174356222003&q=London&days=7&aqi=no&alerts=no`,
  }).then((response) => {
    setTemp(Math.round(response.data.current.temp_c));
    setIcon("http://"+response.data.current.condition.icon);
    setDesc(response.data.current.condition.text);
    
    
    var t = new Date(response.data.current.last_updated_epoch * 1000);
    var formatted = moment(t).format("dddd Do MMMM");
    setDate(formatted);

    [bestTime, bestTemp] = getBestTime(response, 0);

    setBestTime(bestTime);
    setBestTemp(Math.round(bestTemp));
    });
  }, []);
  return (
    <div className = 'boxy'>
        <h1>Today</h1>
        <img id="weathericon"src={icon}/>
        <p>{date}</p>
        <p>{desc}</p>
        <p>{temp}°C</p>
        <p>Suggested Outdoor Time:{bestTime} ({bestTemp}°C)</p>
    </div>
  )
}
export default Boxy