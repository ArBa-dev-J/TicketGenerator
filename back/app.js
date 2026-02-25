import express from "express";
import bodyParser from "body-parser";
import atendeeRoutes from "./router/atendeeRoutes.js";
import cookieParser from "cookie-parser";
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

//middleware for parsing cookies to req.cookies
app.use(cookieParser());

app.use("/api/v1/atendee", jsonParser, atendeeRoutes);

export default app;
