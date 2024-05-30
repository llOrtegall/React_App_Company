import { getUsers, Login, UserByToken } from "../controllers/user.controller";
import { Router } from "express";

export const UserRouter = Router();

UserRouter.get('/users', getUsers)

UserRouter.post('/login', Login)

UserRouter.get('/profile', UserByToken)