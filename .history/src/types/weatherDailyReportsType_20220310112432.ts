export type weatherDailyReportsType = {
  dt: number;
  temp: {
    max: number;
    min: number;
  };
  weather: [
    {
      description: string;
      icon: string;
      id: string;
      main: string;
    }
  ];
  date: date(daily.dt),
  dayOfWeekStr: dayOfWeekStr(daily.dt),
  icon: daily.weather[0].weatherIcon,
  description: daily.weather[0].description,
  temp_max: daily.temp.max,
  temp_min: daily.temp.min
};