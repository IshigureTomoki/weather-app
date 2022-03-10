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
  date: string,
  dayOfWeekStr: string,
  icon: string,
  description: string,
  temp_max: daily.temp.max,
  temp_min: daily.temp.min
};