import React from "react";
import "./WeatherTod.css";
import IMAGES from "../Images";

class WeatherTod extends React.Component {
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
    return (
      <div className="weather_today">
        <figure>
          <img
            src={imageSrc(this.props.data.list[1].weather[0].main)}
            alt={this.props.data.list[1].weather[0].main}
            width="250"
            height="250"
          />
          <h1 className="weather_type">overcast clouds</h1>
        </figure>
        <h1>
          Temperature
          <span className="weather_data">
            {" "}
            {this.props.data.list[1].main.temp_min}&deg; to{" "}
            {this.props.data.list[1].main.temp_max}&deg;c
          </span>
        </h1>
        <hgroup>
          <h2>
            Humidity <span>{this.props.data.list[1].main.humidity}%</span>
          </h2>
          <h2>
            pressure <span>{this.props.data.list[1].main.pressure}</span>
          </h2>
        </hgroup>
      </div>
    );
  }
}
export default WeatherTod;
