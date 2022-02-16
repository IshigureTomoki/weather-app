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
        "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=ff86fbdda3c22e95ce0071f6a7826f6c"
      )
      .then((res) => {
        console.log(res.data);
        const data=res.data;
        setWeatherReport(data)
      });
  };
  return (
    <div className="App">
      <h1>天気予報</h1>
    </div>
  );
}

export default App;
