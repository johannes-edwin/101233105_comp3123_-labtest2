import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';

function App() {
  const API_URL = "http://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "6bce66cee4796510616050cc7d460450";
  const [data, setData] = useState(null);
  const [city, setCity] = useState("Toronto");
  useEffect(() => {
    axios.get(`${API_URL}?q=${city}&appid=${API_KEY}`).then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div className="App">
      {!data ? (
        <div>Loading ...</div>
      ) : (
        <>
          <div className="leftContent">
            <h4>101233105 comp3123_labtest2 </h4>
            <div className="information">
              <div className="celcius">
                <h1>
                  {data.main.temp}
                  <sup>&#176;</sup>
                </h1>
              </div>
              <div className="city">
                <h2>{data.name}</h2>
                <p>{moment().format("dddd MMM Do YY")}</p>
              </div>
              <div className="icon">
                <img
                  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                />
              </div>
            </div>
          </div>
          <div className="rightContent">
            <div className="details">
              <h3>Weather Details</h3>

              <div className="detailItem">
                <div className="left">
                Cloudy
                </div>
                <div className="right">
                {data.clouds.all} %
                </div>
              </div>

              <div className="detailItem">
                <div className="left">
                Humidity
                </div>
                <div className="right">
                {data.main.humidity} %
                </div>
              </div>
              <div className="detailItem">
                <div className="left">
                Wind
                </div>
                <div className="right">
                {data.wind.speed} Km/h
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
