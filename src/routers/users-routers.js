import { Router } from "express";

import { newUser } from "../controllers/users-controllers.js";

const usersRouter = Router();

usersRouter.post("/sign-up", newUser);

export default usersRouter;
