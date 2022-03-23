import PropTypes from 'prop-types'
import Button from './Button'
import { icons } from "react-icons";
import axios from "axios";
import { useState } from "react";
import moment from 'moment';

const WeatherHour = ({title}) => {
  // var [temp,setTemp] = useState("temp");
  // var [city,setCity] = useState("London");
  // var [country,setCountry] = useState("GB");
  // var [icon,setIcon] = useState("10d");
  // var [desc, setDesc] = useState("desc")
  // var [time, setTime] = useState("time");
  // var [lon, setLon] = useState(-0.1257);
  // var [lat, setLat] = useState(51.5085);
  // var [weekweather,setWeekWeather] = useState([]);
  // var [days,setDays] = useState([]);
  // var icons = useState([]);

  // axios({
  //   method: "GET",
  //   url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=f29ec7512066218c63ea0914ec47015f`,
  // }).then((response) => {
  //   setWeekWeather(response.data.daily);
  //   // setIcon("http://openweathermap.org/img/wn/"+weekweather[0].weather[0].icon+"@2x.png");
  //   });
  // for (let i = 1; i < weekweather.length; i++) {
  //   var t = new Date(weekweather[i].dt * 1000);
  //   var formatted = moment(t).format("dddd");
  //   days.push(formatted);
  //   icons.push("http://openweathermap.org/img/wn/"+weekweather[i].weather[0].icon+"@2x.png")
  //   setDays(days);
  //   setIcons(icons);
  // }
  // var dayweather = weekweather.map((dw, i) =>
  // <tr>
  //   <td>{days[i]}</td>
  //   <td></td>
  //   <td><img src={icons[i]} /></td>
  // </tr>)

  return (
    // <div className="weathertable">
    //     <table>
    //       <thead>
    //         <th></th>
    //         <th>Expected outdoor time</th>
    //         <th>Forecast</th>
    //       </thead>
          
    //     </table>
    //     <p>{days[0]}</p>
    // </div>
    <div className="weekOverview">
      <div><p>Table goes here</p></div>
    </div>

  )
}

export default WeatherHour