import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    wetherOneCall();
  }, []);
  
  const [weatherReport,setWeatherReport]=useState("");
  const [serchCity,setSearchCity]=useState("");
  const wetherOneCall = async () => {
    await axios
      .get(
        "https://api.openweathermap.org/data/2.5/onecall?lat=35.26&lon=-222.956&lang=ja&appid=ff86fbdda3c22e95ce0071f6a7826f6c"
      )
      .then((res) => {
        console.log(res);
        const data=res.data.current.weather[0].id;
        setWeatherReport(data);
      });
  };
  return (
    <div className="App">
      <h1>天気予報</h1>
      <div>{weatherReport}</div>
    </div>
  );
}

export default App;
