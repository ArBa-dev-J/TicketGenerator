import { body } from "express-validator";

const validateLogin = [
    body().notEmpty().withMessage("Must contain data"),

    body("emailAddress")
    .isString()
    .withMessage("Must be a string")
    .isEmail()
    .withMessage("Must be an email"),
    

    body("password")
    .isString()
    .withMessage("Must be a string")
    .isLength({min: 6})
    .withMessage("must be atleast 6 chars long")

]

export default validateLogin;