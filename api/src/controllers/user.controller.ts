import { Request, Response } from "express";
import { User } from '../models/user.model';

export async function getUser(req: Request, res: Response) {
  try {
    await User.sync()
    const users = await User.findAll()
    return res.status(200).json(users)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error al obtener los usuarios', error })
  }
}