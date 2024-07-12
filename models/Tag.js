// const { Model, DataTypes } = require('sequelize');
import { Sequelize } from 'sequelize';
const {Model, DataTypes} = Sequelize;
// const sequelize = require('../config/connection.js');
import { dbConnect } from '../config/connection.js';

export class Tag extends Model {}

Tag.init(
  {
    // define columns
  },
  {
    sequelize: dbConnect,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

