interface IForecastItem {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  speed: number;
  deg: number;
  gust: number;
  clouds: number;
  pop: number;
  rain: number;
}

export interface IForecastDetails {
  city: {
    id: 3163858;
    name: "Zocca";
    coord: {
      lon: 10.99;
      lat: 44.34;
    };
    country: "IT";
    population: 4593;
    timezone: 7200;
  };
  cod: "200";
  message: 0.0582563;
  cnt: 7;
  list: IForecastItem[];
}
