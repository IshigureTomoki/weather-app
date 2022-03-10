export type weatherDailyReportsType = {
  dt: number;
  temp_max: number;
temp_min: number;
weatherIconicon: string;
      id: string;
      main: string;

};

date: date(report.dt),
dayOfWeekStr: dayOfWeekStr(report.dt),
weatherIcon: report.weather[0].weatherIcon,
description: report.weather[0].description,
temp_max: report.temp.max,
temp_min: report.temp.min