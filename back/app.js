import express from "express";
import bodyParser from "body-parser";

const app = express();

// create application/json parser
const jsonParser = bodyParser.json();


export default app;