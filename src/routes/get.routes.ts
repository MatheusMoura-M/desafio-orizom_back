import { Router } from "express";
import { getCityByNameController } from "../controllers/get.controller";

const cityRoutes = Router();

cityRoutes.get("/:city", getCityByNameController);

export default cityRoutes;
