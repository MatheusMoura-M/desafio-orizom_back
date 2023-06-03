import { Router } from "express";
import { getCityByNameController } from "../controllers/getCityByName.controller";

const cityRoutes = Router();

cityRoutes.get("/:city", getCityByNameController);

export default cityRoutes;
