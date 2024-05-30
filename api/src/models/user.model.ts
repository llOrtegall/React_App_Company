import { Model, DataTypes } from "sequelize";
import { UserConn } from "../connections/userConn";

class User extends Model { }

User.init({
  codigo: {
    type: DataTypes.NUMBER,
    allowNull: false,
    unique: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nombres: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: UserConn,
  modelName: 'user',
  tableName: 'user',
  timestamps: false
})

export { User }