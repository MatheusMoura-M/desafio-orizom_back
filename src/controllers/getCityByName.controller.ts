import { Request, Response } from "express";
import { getCityByNameService } from "../services";

export const getCityByNameController = async (req: Request, res: Response) => {
  const nameOfTheCity: string = req.params.city;

  const city = await getCityByNameService(nameOfTheCity);

  return res.status(200).json(city);
};
