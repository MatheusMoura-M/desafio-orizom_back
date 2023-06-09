import * as yup from "yup";
import { SchemaOf } from "yup";
import { iGetCityByName } from "../interfaces";

export const getWeatherSchema: SchemaOf<iGetCityByName> = yup.object().shape({
  forecast: yup.object().shape({
    forecastday: yup.array(
      yup.object().shape({
        hour: yup.array(
          yup.object().shape({
            chance_of_snow: yup.string().required(),
            will_it_snow: yup.string().required(),
            chance_of_rain: yup.string().required(),
            will_it_rain: yup.string().required(),
            windchill_f: yup.string().required(),
            windchill_c: yup.string().required(),
            humidity: yup.string().required(),
            wind_kph: yup.string().required(),
            condition: yup.object().shape({
              text: yup.string().required(),
              icon: yup.string().required(),
              code: yup.string().required(),
            }),
            temp_f: yup.string().required(),
            temp_c: yup.string().required(),
            time: yup.string().required(),
          })
        ),
        astro: yup.object().shape({
          sunset: yup.string().required(),
          sunrise: yup.string().required(),
          moon_phase: yup.string().required(),
        }),
        day: yup.object().shape({
          condition: yup.object().shape({
            text: yup.string().required(),
            icon: yup.string().required(),
            code: yup.string().required(),
          }),
          daily_chance_of_snow: yup.number().required(),
          daily_chance_of_rain: yup.number().required(),
          avghumidity: yup.string().required(),
          maxwind_kph: yup.string().required(),
          avgtemp_f: yup.string().required(),
          avgtemp_c: yup.string().required(),
          mintemp_f: yup.string().required(),
          mintemp_c: yup.string().required(),
          maxtemp_f: yup.string().required(),
          maxtemp_c: yup.string().required(),
        }),
        date: yup.string().required(),
      })
    ),
  }),
  current: yup.object().shape({
    humidity: yup.string().required(),
    condition: yup.object().shape({
      text: yup.string().required(),
      icon: yup.string().required(),
      code: yup.string().required(),
    }),
    is_day: yup.string().required(),
    temp_f: yup.string().required(),
    temp_c: yup.string().required(),
    last_updated: yup.string().required(),
  }),
  location: yup.object().shape({
    localtime: yup.string().required(),
    country: yup.string().required(),
    region: yup.string().required(),
    name: yup.string().required(),
  }),
});
