import { getUser } from "../controllers/user.controller";
import { Router } from "express";

export const UserRouter = Router();

UserRouter.get('/user/login', getUser)