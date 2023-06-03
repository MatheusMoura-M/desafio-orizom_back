export interface iHourForecastDay {
  time: string;
  temp_c: string;
  condition: {
    text: string;
    icon: string;
    code: string;
  };
  wind_kph: string;
  humidity: string;
  windchill_c: string;
  will_it_rain: string;
  chance_of_rain: string;
  will_it_snow: string;
  chance_of_snow: string;
}
export interface iForecastDays {
  date: string;
  day: {
    maxtemp_c: string;
    mintemp_c: string;
    avgtemp_c: string;
    maxwind_kph: string;
    avghumidity: string;
    condition: {
      text: string;
      icon: string;
      code: string;
    };
  };
  astro: {
    moon_phase: string;
  };
  hour: iHourForecastDay[];
}
export interface iGetCityByName {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: string;
  };
  current: {
    last_updated: string;
    temp_c: string;
    is_day: string;
    condition: {
      text: string;
      icon: string;
      code: string;
    };
  };
  forecast: {
    forecastday: iForecastDays[];
  };
}
