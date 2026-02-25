import { body } from "express-validator";

const validateNewData = [
  body().notEmpty().withMessage("Must contain data"),

  //data validation

  body("name")
    .isString()
    .withMessage("Name must be a string")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Must be alteast 2 chars longs")
    // check for two words
    .trim()
    .custom((value) => {
      const words = value.split(/\s+/);
      if (words.length !== 2 || words.length === 3) {
        throw new Error("Must contain your name and surname");
      }
      return true;
    }),

  body("emailAddress")
    .isString()
    .withMessage("Must be a string")
    .isEmail()
    .withMessage("Must be an email")
    .isLength({ min: 5 })
    .withMessage("Email must be atleast 5 chars long"),

  body("password").isString().withMessage("Must be a string"),

  body("githubUsername")
    .isString()
    .withMessage("Must be a string")
    .isLength({ min: 3 })
    .withMessage("Must be atleat3 chars long"),

  body("avatar")
    .isString()
    .withMessage("Must be a string")
    .isURL()
    .withMessage("must be an URL")
    .isLength({ min: 5 })
    .withMessage("Must be atleast 5 chars long"),
];

export default validateNewData;
