import axios from "axios";
import { report } from "process";
import React, { useEffect, useState } from "react";
import { convertTypeAcquisitionFromJson } from "typescript";
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
    time: string;
    temp: string;
    humidity: string;
  };

  const [weatherReport, setWeatherReport] = useState<weatherReportType>();
  const [weatherDailyReports, setWeatherDailyReports] = useState<
    weatherDailyReportsType[]
  >([]);

  const [weatherHourlyReports, setWeatherHourlyReports] = useState<
    weatherHourlyReportsType[]
  >([]);
  const [serchCity, setSearchCity] = useState("");

  const time = (dt: number) => {
    const srTime = new Date(dt * 1000);
    const time = srTime.toLocaleTimeString();
    return `${time}`;
  };

  const hour = (dt: number) => {
    const srTime = new Date(dt * 1000);
    const hour = srTime.getHours();
    return `${hour}`;
  };

  const day = (dt: number) => {
    const srTime = new Date(dt * 1000);
    const day = srTime.toLocaleDateString();
    return `${day}`;
  };

  const day = (dt: number) => {
    const srTime = new Date(dt * 1000);
    const day = srTime.toLocaleDateString();
    return `${day}`;
  };

  date.getDate()

  const wetherOneCall = async () => {
    await axios
      .get(
        "https://api.openweathermap.org/data/2.5/onecall?lat=35.690&lon=139.692&lang=ja&units=metric&appid=ff86fbdda3c22e95ce0071f6a7826f6c"
      )
      .then((res) => {
        console.log(res);

        const get_wind_deg = (wind_deg: number) => {
          let r = "??????";
          if (wind_deg >= 11.25) r = "?????????";
          if (wind_deg >= 33.75) r = "????????????";
          if (wind_deg >= 56.25) r = "?????????";
          if (wind_deg >= 78.75) r = "??????";
          if (wind_deg >= 101.25) r = "?????????";
          if (wind_deg >= 123.75) r = "????????????";
          if (wind_deg >= 146.25) r = "?????????";
          if (wind_deg >= 168.75) r = "??????";
          if (wind_deg >= 191.25) r = "?????????";
          if (wind_deg >= 213.75) r = "????????????";
          if (wind_deg >= 236.25) r = "?????????";
          if (wind_deg >= 258.75) r = "??????";
          if (wind_deg >= 281.25) r = "?????????";
          if (wind_deg >= 303.75) r = "????????????";
          if (wind_deg >= 326.25) r = "?????????";
          return r;
        };

        const report = {
          time: `${day(res.data.current.dt)} ${time(res.data.current.dt)}`,
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

        const hourlyreports = res.data.hourly.map(
          (hourly: any, index: number) => {
            return {
              time: hour(hourly.dt),
              temp: hourly.temp,
              humidity: hourly.humidity,
            };
          }
        );

        hourlyreports.length = 24;

        console.log(report);
        setWeatherReport(report);
        setWeatherDailyReports(res.data.daily);
        console.log(hourlyreports);
        setWeatherHourlyReports(hourlyreports);
      });
  };
  return (
    <>
      <h1>????????????</h1>
      <div className="now-area">
        <div className="title">???????????????</div>
        <div>???????????????{weatherReport?.time}</div>
        <div>?????????{weatherReport?.timezone}</div>
        <div>
          <img src={weatherReport?.weatherIcon} alt="icon" />
        </div>
        <div>?????????{weatherReport?.temp}???</div>
        <div>?????????{weatherReport?.weatherDescription}</div>
        <dl>
          <dt>????????????</dt><dd>{weatherReport?.feels_like}???</dd>
          <dt>??????</dt><dd>{weatherReport?.wind_deg}</dd>
          <dt>??????</dt><dd>{weatherReport?.wind_speed}m/s</dd>
          <dt>??????</dt><dd>{weatherReport?.pressure}hPa</dd>
          <dt>??????</dt><dd>{weatherReport?.humidity}%</dd>
        </dl>
      </div>

      <div className="dayly-area">
        <div className="title">8??????????????????</div>
        {weatherDailyReports.map((report) => (
          <>
            <div>
              {day(report.dt)}
              <img
                src={`http://openweathermap.org/img/wn/${report.weather[0].icon}@2x.png`}
                alt="icon"
                width={40}
              />
              {report.temp.max}/{report.temp.min}???{" "}
              {report.weather[0].description}
            </div>
          </>
        ))}
      </div>

      <div className="hourly-area">
        <div className="title">1????????????????????????</div>
        <LinePlot data={weatherHourlyReports} />
      </div>
    </>
  );
}

export default App;
