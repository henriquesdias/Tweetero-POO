import chalk from "chalk";
import cors from "cors";
import express, { json } from "express";

import usersRouter from "./routers/users-routers.js";
import tweetsRouter from "./routers/tweets-routers.js";

const app = express();

app.use(cors());
app.use(json());
app.use(usersRouter);
app.use(tweetsRouter);

app.listen(5001, () => {
  console.log(chalk.bold.blue("Servidor funfando de boas!!!"));
});
