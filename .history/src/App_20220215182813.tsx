import React from 'react';
import './App.css';

function App() {
  const wetherOneCall=async()=>{
    await axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}")
  }
  return (
    <div className="App">
      <h1>天気予報</h1>

    </div>
  );
}

export default App;
