import { icons } from "react-icons";
import axios from "axios";
import { useState } from "react";
import moment from 'moment';

const Boxy = () => {
  var [temp,setTemp] = useState("temp");
  var [city,setCity] = useState("London");
  var [country,setCountry] = useState("GB");
  var [icon,setIcon] = useState("10d");
  var [desc, setDesc] = useState("desc")
  var [time, setTime] = useState("time");
  axios({
    method: "GET",
    url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=f29ec7512066218c63ea0914ec47015f`,
  }).then((response) => {
    setTemp(response.data.main.temp - 273.15);
    setIcon("http://openweathermap.org/img/wn/"+response.data.weather[0].icon+"@2x.png");
    setDesc(response.data.weather[0].description);
    
    var t = new Date(response.data.dt * 1000);
    var formatted = moment(t).format("dddd Do MMMM");
    setTime(formatted);
    });
  
  return (
    <div className = 'boxy'>
      
        <h1>Today</h1>
        <img id="weathericon"src={icon}/>
        <p>{time}</p>
        <p>{desc}</p>    
    </div>
  )
}
export default Boxy