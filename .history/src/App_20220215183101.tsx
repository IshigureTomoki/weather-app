import React, { useEffect } from 'react';
import './App.css';

function App() {

  useEffect()

  const wetherOneCall=async()=>{
    await axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=ff86fbdda3c22e95ce0071f6a7826f6c").then((res)=>{
      console.log(res);
    })
  }
  return (
    <div className="App">
      <h1>天気予報</h1>

    </div>
  );
}

export default App;
