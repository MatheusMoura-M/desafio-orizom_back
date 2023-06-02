import "express-async-errors";
import express from "express";
import cors from "cors";
import { handleError } from "./error/appError.error";
import { cityRoutes } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/city", cityRoutes);

app.use(handleError);

export default app;
