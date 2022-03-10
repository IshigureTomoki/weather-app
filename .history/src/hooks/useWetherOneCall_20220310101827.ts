import axios from "axios";
import { useState } from "react";
import { weatherDailyReportsType } from "../types/weatherDailyReportsType";
import { weatherHourlyReportsType } from "../types/weatherHourlyReportsType";
import { weatherReportType } from "../types/weatherReportType";

//天気を取得するカスタムフック
export const useWeatherOneCall = () => {
  const [weatherReport, setWeatherReport] = useState<weatherReportType>();
  const [weatherDailyReports, setWeatherDailyReports] = useState<
    weatherDailyReportsType[]
  >([]);

  const [weatherHourlyReports, setWeatherHourlyReports] = useState<
    weatherHourlyReportsType[]
  >([]);

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

  const mday = (dt: number) => {
    const srTime = new Date(dt * 1000);
    const day = srTime.toLocaleDateString();
    return `${day}`;
  };

  const date = (dt: number) => {
    const srTime = new Date(dt * 1000);
    const date = srTime.getDate();
    return `${date}`;
  };

  const dayOfWeekStr = (dt: number) => {
    const srTime = new Date(dt * 1000);
    const day = srTime.getDay();
    const dayOfWeekStrJP = ["日", "月", "火", "水", "木", "金", "土"];
    return `(${dayOfWeekStrJP[day]})`;
  };



  const weatherOneCall = async (position: { lat: number; lon: number; }) => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${position.lat}&lon=${position.lon}&lang=ja&units=metric&appid=ff86fbdda3c22e95ce0071f6a7826f6c`
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
          time: `${mday(res.data.current.dt)} ${time(res.data.current.dt)}`,
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
              時間: `${hour(hourly.dt)}時`,
              気温: Math.round(hourly.temp * Math.pow(10, 1)) / Math.pow(10, 1),
              降水確率: hourly.pop * 100,
            };
          }
        );

        hourlyreports.length = 24;

        const daylyreports = res.data.dayly.map((report:any)=>{
          return{
            date:date(report.dt),
            dayOfWeekStr:dayOfWeekStr(report.dt),
            weatherIcon:report.weather[0].weatherIcon,
            description:report.weather[0].description,
            temp_max:report.temp.max,
            temp_min:report.temp.min
          }

        }

        )

        console.log(report);
        setWeatherReport(report);
        setWeatherDailyReports(res.data.daily);
        console.log(hourlyreports);
        setWeatherHourlyReports(hourlyreports);
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  };

  return { weatherOneCall, weatherReport, weatherDailyReports, weatherHourlyReports };
};