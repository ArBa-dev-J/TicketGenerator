import express from "express";
import {
  postNewDataC,
  getByIdC,
  login,
  logout,
  protect,
  allowAccessTo,
  getAuthenticatedUser,
} from "../controller/atendeeControllers.js";
import validate from "../validate/validate.js";
import validateNewData from "../validate/validateNewData.js";
import validateLogin from "../validate/validateLogin.js";

const atendeeRoutes = express.Router();

atendeeRoutes.route("/logout").get(protect, logout);
atendeeRoutes.route("/signup").post(validateNewData, validate, postNewDataC);
atendeeRoutes.route("/login").post(validateLogin, validate, login);
atendeeRoutes
  .route("/:id")
  .get(protect, allowAccessTo("user"), getAuthenticatedUser, getByIdC);

export default atendeeRoutes;
