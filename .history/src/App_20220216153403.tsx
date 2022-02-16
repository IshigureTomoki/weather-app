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
        const data = res.data.current.weather[0].id;

        const srTime = new Date(res.data.current.dt * 1000);

        // // extract sunrise and timezone offset in UNIX epoch seconds
        // const sunrise = res.data.current.sunrise;
        // const timezone = res.data.timezone_offset;

        // // create Date object for sunrise with timezone offset
        // const srTime = new Date((sunrise + timezone) * 1000);

        // convert number to a 2-digit string
        const twoDigits = (val: any) => {
          return ("0" + val).slice(-2);
        };

        const year = srTime.getUTCFullYear();
        const month = twoDigits(srTime.getUTCMonth() + 1);
        const dayOfMonth = twoDigits(srTime.getUTCDate());
        const hours = twoDigits(srTime.getUTCHours());
        const minutes = twoDigits(srTime.getUTCMinutes());
        const seconds = twoDigits(srTime.getUTCSeconds());

        console.log(srTime.toString());

        const currentTime = `${year}-${month}-${dayOfMonth} ${hours}:${minutes}:${seconds}`;

        setWeatherReport(data);
      });
  };
  return (
    <div className="App">
      <h1>天気予報</h1>
      <div>現在時刻：{currentTime}</div>
      <div>{weatherReport}</div>
    </div>
  );
}

export default App;
