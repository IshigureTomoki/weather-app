export type weatherDailyReportsType = {
  dt: number;
  temp?max: number;
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
};