import axios from "axios";

export const getCityByNameService = async (city: string) => {
  const api = axios.create({
    baseURL: "http://api.weatherapi.com/v1",
  });

  const resp = await api
    .get(`/current.json?key=c3ecb89df3234a44869184438230206&q=${city}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));

  return resp;
};
