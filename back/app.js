import express from "express";
import bodyParser from "body-parser";
import atendeeRoutes from "./router/atendeeRoutes.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: `http://localhost:5173`,
    credentials: false,
  }),
);

// create application/json parser
const jsonParser = bodyParser.json();

app.use("/api/v1/atendee", jsonParser, atendeeRoutes);

export default app;
