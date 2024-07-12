// const { Model, DataTypes } = require('sequelize');
import { Sequelize } from 'sequelize';
const {Model, DataTypes} = Sequelize;
// const sequelize = require('../config/connection');
import { dbConnect } from '../config/connection.js';

export class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
  },
  {
    sequelize: dbConnect,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

