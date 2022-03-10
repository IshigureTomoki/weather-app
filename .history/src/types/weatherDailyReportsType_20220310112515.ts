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
  temp_max: string,
  temp_min: string
};