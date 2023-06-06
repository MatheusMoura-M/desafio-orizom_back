import * as yup from "yup";
import { SchemaOf } from "yup";
import { iGetListOfWeatherCondition } from "../interfaces";

export const getListOfWeatherConditionSchema: SchemaOf<
  iGetListOfWeatherCondition[]
> = yup.array(
  yup.object().shape({
    weather_condition_night: yup.string().required(),
    weather_condition_day: yup.string().required(),
    night: yup.string().required(),
    day: yup.string().required(),
  })
);
