import { Request, Response } from "express";
import { getListOfWeatherConditionService } from "../services";

export const getListOfWeatherConditionController = async (
  req: Request,
  res: Response
) => {
  const city = await getListOfWeatherConditionService();

  return res.status(200).json(city);
};
