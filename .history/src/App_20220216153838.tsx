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


        const day = srTime.toLocaleDateString();
        
        const day = srTime.toLocaleDateString();
        const currentTime = `${year}年${month}月${dayOfMonth}日 ${hours}:${minutes}:${seconds}`;
        
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
