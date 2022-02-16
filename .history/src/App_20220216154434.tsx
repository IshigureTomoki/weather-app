import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    wetherOneCall();
  }, []);

  const [weatherReport, setWeatherReport] = useState("");
  const [serchCity, setSearchCity] = useState("");
  const wetherOneCall = async () => {
    await axios
      .get(
        "https://api.openweathermap.org/data/2.5/onecall?lat=35.690&lon=139.692&lang=ja&appid=ff86fbdda3c22e95ce0071f6a7826f6c"
      )
      .then((res) => {
        console.log(res);

        const srTime = new Date(res.data.current.dt * 1000);
        const day = srTime.toLocaleDateString();
        const time = srTime.toLocaleTimeString();
        const currentTime = `${day} ${time}`;

        console.log(currentTime);

        current:
          clouds: 40
          dew_point: 270.16
          dt: 1644993661
          feels_like: 279.93
          humidity: 39
          pressure: 1004
          sunrise: 1644960470
          sunset: 1644999787
          temp: 283.07
          uvi: 0.21
          visibility: 10000
          weather: Array(1)
          0: {id: 802, main: 'Clouds', description: '雲', icon: '03d'}
          wind_deg: 180
          wind_speed: 7.2

        
        setWeatherReport(currentTime);
      });
    };
    return (
    <div className="App">
      <h1>天気予報</h1>
      <div>現在時刻：</div>
      <div>{weatherReport}</div>
    </div>
  );
}

export default App;
