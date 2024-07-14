// const { Model, DataTypes } = require('sequelize');
import { Sequelize } from 'sequelize';
const {Model, DataTypes} = Sequelize;

import { dbConnect } from '../config/connection.js';

export class Category extends Model {}

Category.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      autoIncrement: true,
      primaryKey: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: dbConnect,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

