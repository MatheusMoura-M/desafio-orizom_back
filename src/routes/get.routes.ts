import { Router } from "express";
import {
  getCityByNameController,
  getListOfWeatherConditionController,
} from "../controllers";

const getRoutes = Router();

getRoutes.get("/weatherConditions", getListOfWeatherConditionController);
getRoutes.get("/city/:city", getCityByNameController);

export default getRoutes;
