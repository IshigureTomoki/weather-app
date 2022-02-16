import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    wetherOneCall();
  }, []);

  const [weatherReport, setWeatherReport] = useState({});
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

        const report = {
          // 温度
          temp: res.data.current.temp,
          //体感温度
          feels_like: res.data.current.feels_like,
          // 風向き
          wind_deg: res.data.current.wind_deg,
          // 気圧
          pressure: res.data.current.pressure,
          // 湿度
          humidity: res.data.current.humidity,
        };

        // current:
        //   dt: 1644993661
        //   sunrise: 1644960470
        //   sunset: 1644999787
        //   temp: 283.07
        //   feels_like: 279.93
        //   pressure: 1004
        //   humidity: 39
        //   dew_point: 270.16
        //   clouds: 40
        //   uvi: 0.21
        //   visibility: 10000
        //   wind_speed: 7.2
        //   wind_deg: 180
        //   weather: Array(1)
        //     0: {id: 802, main: 'Clouds', description: '雲', icon: '03d'}

        setWeatherReport(report);
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
