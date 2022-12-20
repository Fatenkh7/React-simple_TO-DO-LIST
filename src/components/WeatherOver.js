import React from "react";
import "./WeatherOver.css";
import WeatherPre from "./WeatherPre.js";
import IMAGES from "../Images";
class WeatherOver extends React.Component {
  render() {
    const imageSrc = (image) => {
      if (image === "Clouds") return IMAGES.cloudy;
      else if (image === "Clear") return IMAGES.clear;
      else if (image === "Mostlycloudy") return IMAGES.mostlycloudy;
      else if (image === "Partlycloudy") return IMAGES.partlycloudy;
      else if (image === "Snow") return IMAGES.snow;
      else if (image === "Storm") return IMAGES.storm;
      else if (image === "Rain") return IMAGES.rain;
      else if (image === "Fog") return IMAGES.fog;
      else if (image === "Drizzle") return IMAGES.drizzle;
    };
    const weatherTimeSel = (list) => {
      let weatherListArray = [];
      for (let i = 0; i < list.length; i++) {
        if (i in [4, 7, 10, 13, 16, 19, 22]) {
          weatherListArray.push(weatherList[i]);
        }
      }
      return weatherListArray;
    };
    const time=(timeStr)=>{
        let newTimeStr =new Date(timeStr)
        let hours = newTimeStr.getHours();
        let minutes = newTimeStr.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    const weatherList = this.props.data.list.map((element, index) => (
      <WeatherPre
        src={imageSrc(element.weather[0].main)}
        time={time(element.dt_txt)}
        temp={element.main.temp}
        key={index}
        main={element.weather[0].main}
      />
    ));
    return <div className="weather-over">{weatherTimeSel(weatherList)}</div>;
  }
}

export default WeatherOver;
