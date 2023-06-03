import axios from "axios";
import { getWeatherSchema } from "../schemas/getCityByName.schema";

export const getCityByNameService = async (city: string) => {
  const api = axios.create({
    baseURL: "http://api.weatherapi.com/v1",
  });

  const resp = await api
    .get(`/forecast.json?key=c3ecb89df3234a44869184438230206&q=${city}&lang=pt`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));

  const respFormated = getWeatherSchema.validate(resp, {
    stripUnknown: true,
  });

  return respFormated;
};
