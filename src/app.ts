import "express-async-errors";
import "reflect-metadata";
import express, { json } from "express";
import { categoryRouter, tasksRouter } from "./routers";
import helmet from "helmet";
import { handleErrors } from "./middlewares";

let cors = require("cors");

export const app = express();

app.use(helmet());
app.use(json());
app.use(cors());

app.use("/tasks", tasksRouter);
app.use("/categories", categoryRouter);

app.use(handleErrors);
