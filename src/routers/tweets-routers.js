import { Router } from "express";

import {
  createTweet,
  getTweetsOfUser,
  getTweets,
} from "../controllers/tweets-controllers.js";

const tweetsRouter = Router();

tweetsRouter
  .post("/tweets", createTweet)
  .get("/tweets/:username", getTweetsOfUser)
  .get("/tweets", getTweets);

export default tweetsRouter;
