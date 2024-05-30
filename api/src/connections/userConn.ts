import { Sequelize } from 'sequelize'
import 'dotenv/config'

const METAS_DB_USER = process.env.DB_METAS_USER as string
const METAS_DB_PASSWORD = process.env.DB_METAS_PASSWORD
const METAS_DB_HOST = process.env.DB_METAS_HOST
const METAS_DB_PORT = process.env.DB_METAS_PORT as string
const METAS_DB_DATABASE = process.env.DB_METAS_DATABASE as string


const UserConn = new Sequelize(METAS_DB_DATABASE, METAS_DB_USER, METAS_DB_PASSWORD, {
  host: METAS_DB_HOST,
  port: parseInt(METAS_DB_PORT),
  dialect: 'mariadb'
})

export { UserConn }