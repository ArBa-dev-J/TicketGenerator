import express from "express";
import bodyParser from "body-parser";
import atendeeRoutes from "./router/atendeeRoutes.js";

const app = express();

// create application/json parser
const jsonParser = bodyParser.json();

app.use("/api/v1/atendee", jsonParser, atendeeRoutes);

export default app;