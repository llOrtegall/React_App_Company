import { Request, Response } from "express";
import { User } from '../models/user.model';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function getUsers(req: Request, res: Response) {
  try {
    await User.sync()
    const users = await User.findAll()
    return res.status(200).json(users)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error al obtener los usuarios', error })
  }
}

export async function Login(req:Request, res:Response) {
  const { username, password } = req.body

  if (!username || !password) {
    return res.status(400).json({ message: 'Faltan datos' })
  }

  try {
    await User.sync()
    const user = await User.findOne({ where: { username } })

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }

    if (user.dataValues.password !== password) {
      return res.status(401).json({ message: 'Contraseña incorrecta' })
    }

    if (user.dataValues.estado !== 'A') {
      return res.status(401).json({ message: 'Usuario inactivo' })
    }

    const token = jwt.sign(user.dataValues, JWT_SECRET, { expiresIn: '2h' })

    return res.status(200).json({ auth: true, token })

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error al obtener el usuario', error })
  }
}

export async function UserByToken(req: Request, res: Response){
  const bearerHeader = req.headers.authorization

  if (!bearerHeader) {
    return res.status(401).json({ message: 'No Token Provided' })
  }

  const bearer = bearerHeader.split(' ')
  const token = bearer[1]

  try {
    const result = jwt.verify(token, JWT_SECRET)
    return res.status(200).json(result)
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error })
  }
}