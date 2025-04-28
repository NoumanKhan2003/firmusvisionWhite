import express from "express";
import { queriesPostController } from "../controllers/queriesController.js";
import { contactAddValidation } from "../middlewares/contactValidation.js";

const queriesRouter = express.Router();

queriesRouter.post("/queriesPost",contactAddValidation, queriesPostController);

export default queriesRouter;
