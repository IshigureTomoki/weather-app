import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    wetherOneCall();
  }, []);

  type weatherReportType = {
    time: string;
    timezone:string;
    temp: string;
    feels_like: string;
    wind_deg: string;
    wind_speed:string;
    pressure: string;
    humidity: string;
    weatherDescription: string;
    weatherIcon: string;
  };
  const [weatherReport, setWeatherReport] = useState<weatherReportType>();
  const [serchCity, setSearchCity] = useState("");
  const wetherOneCall = async () => {
    await axios
      .get(
        "https://api.openweathermap.org/data/2.5/onecall?lat=35.690&lon=139.692&lang=ja&units=metric&appid=ff86fbdda3c22e95ce0071f6a7826f6c"
      )
      .then((res) => {
        console.log(res);

        const srTime = new Date(res.data.current.dt * 1000);
        const day = srTime.toLocaleDateString();
        const time = srTime.toLocaleTimeString();
        const currentTime = `${day} ${time}`;

        console.log(currentTime);

        const get_wind_deg=(wind_deg:number)=>{
          let r = '北';
          if (wind_deg>=11.25) r = '北北東';
          if (wind_deg>=33.75) r = '北東';
          if (wind_deg>=56.25) r = '東北東';
          if (wind_deg>=78.75) r = '東';
          if (wind_deg>=101.25) r = '東南東';
          if (wind_deg>=123.75) r = '南東';
          if (wind_deg>=146.25) r = '南南東';
          if (wind_deg>=168.75) r = '南';
          if (wind_deg>=191.25) r = '南南西';
          if (wind_deg>=213.75) r = '南西';
          if (wind_deg>=236.25) r = '西南西';
          if (wind_deg>=258.75) r = '西';
          if (wind_deg>=281.25) r = '西北西';
          if (wind_deg>=303.75) r = '北西';
          if (wind_deg>=326.25) r = '北北西';
          return r + '風';
        }

        const report = {
          time: currentTime,
          timezone:res.data.timezone,
          // 温度
          temp: res.data.current.temp,
          //体感温度
          feels_like: get_wind_degres.data.current.feels_like,
          // 風向き
          wind_deg: res.data.current.wind_deg,
          // 風速
          wind_speed: res.data.current.wind_speed,
          // 気圧
          pressure: res.data.current.pressure,
          // 湿度
          humidity: res.data.current.humidity,
          weatherDescription: res.data.current.weather[0].description,
          weatherIcon: `http://openweathermap.org/img/wn/${res.data.current.weather[0].icon}@2x.png`,
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
        console.log(report);
        setWeatherReport(report);
      });
  };
  return (
    <div className="App">
      <h1>天気予報</h1>
      <div>取得日時：{weatherReport?.time}</div>
      <div>場所：{weatherReport?.timezone}</div>
      <div>天気：{weatherReport?.weatherDescription}</div>
      <div>
        <img src={weatherReport?.weatherIcon} alt="icon" />
      </div>
      <div>気温：{weatherReport?.temp}℃</div>
      <div>体感温度：{weatherReport?.feels_like}℃</div>
      <div>風向き：{weatherReport?.wind_deg}_{weatherReport?.wind_speed}m/s</div>
      <div>気圧：{weatherReport?.pressure}hPa</div>
      <div>湿度：{weatherReport?.humidity}%</div>
    </div>
  );
}

export default App;
