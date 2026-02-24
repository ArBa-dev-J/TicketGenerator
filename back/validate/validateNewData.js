import { body } from "express-validator";

const validateNewData = [
    body().notEmpty().withMessage("Must contain data"),

    //data validation

    body("name")
        .isString()
        .withMessage("Name must be a string")
        // check for two words
        .trim()
        .custom((value) => {
            const words = value.split(/\s+/);
            if (words.length !== 2) {
                throw new Error("Must contain your name and surname");
            }
            return true;
        }),

        body("emailAdress")
        .isString()
        .withMessage("Must be a string")
        .
];

export default validateNewData;