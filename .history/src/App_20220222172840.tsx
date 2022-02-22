import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import { LinePlot } from "./components/LinePlot";

function App() {
  useEffect(() => {
    wetherOneCall();
  }, []);

  type weatherReportType = {
    time: string;
    timezone: string;
    temp: string;
    feels_like: string;
    wind_deg: string;
    wind_speed: string;
    pressure: string;
    humidity: string;
    weatherDescription: string;
    weatherIcon: string;
  };

  type weatherDailyReportsType = {
    dt: number;
    temp: {
      max: string;
      min: string;
    };
    weather: [
      {
        description: string;
        icon: string;
        id: string;
        main: string;
      }
    ];
  };

  type weatherHourlyReportsType = {
    dt: number;
    temp: string;
    humidity:string;
    weather: [
      {
        description: string;
        icon: string;
        id: string;
        main: string;
      }
    ];
  };
  const [weatherReport, setWeatherReport] = useState<weatherReportType>();
  const [weatherDailyReports, setWeatherDailyReports] = useState<
    weatherDailyReportsType[]
  >([]);

  const [weatherHourlyReports, setWeatherHourlyReports] = useState<
    weatherHourlyReportsType[]
  >([]);
  const [serchCity, setSearchCity] = useState("");

  const date_time = (dt: number) => {
    const srTime = new Date(dt * 1000);
    const day = srTime.toLocaleDateString();
    const time = srTime.toLocaleTimeString();
    return `${day} ${time}`;
  };

  const day = (dt: number) => {
    const srTime = new Date(dt * 1000);
    const day = srTime.toLocaleDateString();
    return `${day}`;
  };

  const wetherOneCall = async () => {
    await axios
      .get(
        "https://api.openweathermap.org/data/2.5/onecall?lat=35.690&lon=139.692&lang=ja&units=metric&appid=ff86fbdda3c22e95ce0071f6a7826f6c"
      )
      .then((res) => {
        console.log(res);

        const get_wind_deg = (wind_deg: number) => {
          let r = "北↓";
          if (wind_deg >= 11.25) r = "北北東";
          if (wind_deg >= 33.75) r = "北東↙︎";
          if (wind_deg >= 56.25) r = "東北東";
          if (wind_deg >= 78.75) r = "東←";
          if (wind_deg >= 101.25) r = "東南東";
          if (wind_deg >= 123.75) r = "南東↖︎";
          if (wind_deg >= 146.25) r = "南南東";
          if (wind_deg >= 168.75) r = "南↑";
          if (wind_deg >= 191.25) r = "南南西";
          if (wind_deg >= 213.75) r = "南西↗︎";
          if (wind_deg >= 236.25) r = "西南西";
          if (wind_deg >= 258.75) r = "西→";
          if (wind_deg >= 281.25) r = "西北西";
          if (wind_deg >= 303.75) r = "北西↘︎";
          if (wind_deg >= 326.25) r = "北北西";
          return r;
        };

        const report = {
          time: date_time(res.data.current.dt),
          timezone: res.data.timezone,
          temp: res.data.current.temp,
          feels_like: res.data.current.feels_like,
          wind_deg: get_wind_deg(res.data.current.wind_deg),
          wind_speed: res.data.current.wind_speed,
          pressure: res.data.current.pressure,
          humidity: res.data.current.humidity,
          weatherDescription: res.data.current.weather[0].description,
          weatherIcon: `http://openweathermap.org/img/wn/${res.data.current.weather[0].icon}@2x.png`,
        };

        const reporthourly={
          res.data.hourly
        }



        console.log(report);
        setWeatherReport(report);
        setWeatherDailyReports(res.data.daily);
        setWeatherHourlyReports(res.data.hourly);
      });
  };
  return (
    <div className="App">
      <h1>天気予報</h1>
      <h3>現在の天気</h3>
      <div>取得日時：{weatherReport?.time}</div>
      <div>場所：{weatherReport?.timezone}</div>
      <div>天気：{weatherReport?.weatherDescription}</div>
      <div>
        <img src={weatherReport?.weatherIcon} alt="icon" />
      </div>
      <div>気温：{weatherReport?.temp}℃</div>
      <div>体感温度：{weatherReport?.feels_like}℃</div>
      <div>風向：{weatherReport?.wind_deg}</div>
      <div>風速：{weatherReport?.wind_speed}m/s</div>
      <div>気圧：{weatherReport?.pressure}hPa</div>
      <div>湿度：{weatherReport?.humidity}%</div>
      <br></br>
      <h3>8日間天気予報</h3>
      {weatherDailyReports.map((report) => (
        <>
          <div>
            {day(report.dt)}
            <img
              src={`http://openweathermap.org/img/wn/${report.weather[0].icon}@2x.png`}
              alt="icon"
            />
            {report.temp.max}/{report.temp.min}℃ {report.weather[0].description}
          </div>
        </>
      ))}

      <h3>1時間毎の天気予報</h3>
      <LinePlot />
      {weatherHourlyReports.map((report) => (
        <>
          <div>
            {date_time(report.dt)}
            <img
              src={`http://openweathermap.org/img/wn/${report.weather[0].icon}@2x.png`}
              alt="icon"
            />
            {report.temp}℃ {report.weather[0].description} {report.humidity}%
          </div>
        </>
      ))}
    </div>
  );
}

export default App;
