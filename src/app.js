import express from "express";
import cors from "cors";
import * as userController from './controllers/userController.js';
import * as financialController from './controllers/financialController.js';
import validate from "./middlewares/validate.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use('/financial-events', validate);

app.post("/sign-up", userController.signUp);

app.post("/sign-in", userController.signIn);

app.post("/financial-events", financialController.createEvent);

app.get("/financial-events", financialController.getEvents);

app.get("/financial-events/sum", financialController.getTotal);

export default app;
