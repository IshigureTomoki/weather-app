export type weatherDailyReportsType = {
  dt: number;
  temp_max: number;
temp_min: number;
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