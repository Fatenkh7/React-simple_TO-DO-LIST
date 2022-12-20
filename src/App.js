import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search.js";
import WeatherTod from "./components/WeatherTod";
import WeatherOver from "./components/WeatherOver";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items:[]
    };
  }
  componentDidMount() {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=Beirut&cnt=8&units=metric&appid=a104ba8d311fbe2eee38f82eb5695ae2")
      .then(res => res.json())
      .then(
        (json) => {
          this.setState({
            isLoaded: true,
            items: json
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
        const { error, isLoaded} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="app">
        <Search />
        <main className="app__main">
          <WeatherTod data={this.state.items}/>
          <WeatherOver data={this.state.items} />
        </main>
      </div>
      );
    }

  }
}



export default App;
