import express from "express"
import { postNewDataC } from "../controller/atendeeControllers.js";
import validate from "../validate/validate.js";
import validateNewData from "../validate/validateNewData.js";

const atendeeRoutes = express.Router();

atendeeRoutes.route("/").post(validateNewData, validate, postNewDataC);

export default atendeeRoutes;