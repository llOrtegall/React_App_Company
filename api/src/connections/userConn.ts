import { Sequelize } from 'sequelize'
import 'dotenv/config'

const USER_DB_USER = process.env.DB_USER_USER as string
const USER_DB_PASSWORD = process.env.DB_USER_PASSWORD
const USER_DB_HOST = process.env.DB_USER_HOST
const USER_DB_PORT = process.env.DB_USER_PORT as string
const USER_DB_DATABASE = process.env.DB_USER_DATABASE as string


const UserConn = new Sequelize(USER_DB_DATABASE, USER_DB_USER, USER_DB_PASSWORD, {
  host: USER_DB_HOST,
  port: parseInt(USER_DB_PORT),
  dialect: 'mysql'
})

export { UserConn }