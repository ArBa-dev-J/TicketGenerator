import express from "express"
import { postNewDataC } from "../controller/atendeeControllers.js";

const atendeeRoutes = express.Router();

atendeeRoutes.route("/").post(postNewDataC);

export default atendeeRoutes;