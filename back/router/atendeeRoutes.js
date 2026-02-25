import express from "express";
import {
  postNewDataC,
  getByIdC,
  login,
  logout,
  protect,
  allowAccessTo
} from "../controller/atendeeControllers.js";
import validate from "../validate/validate.js";
import validateNewData from "../validate/validateNewData.js";

const atendeeRoutes = express.Router();

atendeeRoutes.route("/signup").post(validateNewData, validate, postNewDataC);
atendeeRoutes.route("/login").get(login)
atendeeRoutes.route("/:id").get(protect, allowAccessTo("attendee"), getByIdC);
atendeeRoutes.route("/logout").get(protect, logout)

export default atendeeRoutes;
