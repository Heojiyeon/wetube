import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { userRouter } from "./route";

const app = express();

const handleHome = (req, res) => res.send("hello from home!");

const handleProfile = (req, res) => res.send("you are on my profile");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(helmet());
app.use(morgan("dev"));

app.get("/profile", handleProfile);

app.use("/user", userRouter);

export default app;