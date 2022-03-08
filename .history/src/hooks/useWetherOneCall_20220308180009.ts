import { useState } from "react";
import { weatherDailyReportsType } from "../types/weatherDailyReportsType";
import { weatherHourlyReportsType } from "../types/weatherHourlyReportsType";
import { weatherReportType } from "../types/weatherReportType";

//天気を取得するカスタムフック
export const useWeatherOneCall = ()=>{
  const [weatherReport, setWeatherReport] = useState<weatherReportType>();
  const [weatherDailyReports, setWeatherDailyReports] = useState<
    weatherDailyReportsType[]
  >([]);

  const [weatherHourlyReports, setWeatherHourlyReports] = useState<
    weatherHourlyReportsType[]
  >([]);

  const getWeathers = 
}