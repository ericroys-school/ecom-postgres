// const { Model, DataTypes } = require('sequelize');
import { Sequelize } from 'sequelize';
const {Model, DataTypes} = Sequelize;

import { dbConnect } from '../config/connection.js';

export class Category extends Model {}

Category.init(
  {
    // define columns
  },
  {
    sequelize: dbConnect,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

