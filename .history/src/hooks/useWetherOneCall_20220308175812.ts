import { useState } from "react";
import { weatherDailyReportsType } from "../types/wetherDailyReportsType";
import { weatherHourlyReportsType } from "../types/wetherHourlyReportsType";
import { weatherReportType } from "../types/wetherReportType";

//天気を取得するカスタムフック
export const useWetherOneCall = ()=>{
  const [weatherReport, setWeatherReport] = useState<weatherReportType>();
  const [weatherDailyReports, setWeatherDailyReports] = useState<
    weatherDailyReportsType[]
  >([]);

  const [weatherHourlyReports, setWeatherHourlyReports] = useState<
    weatherHourlyReportsType[]
  >([]);

  const get
}