// const { Model, DataTypes } = require('sequelize');
import { Sequelize } from 'sequelize';
const {Model, DataTypes} = Sequelize;
// const sequelize = require('../config/connection.js');
import { dbConnect } from '../config/connection.js';

export class Tag extends Model {}

Tag.init(
  {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize: dbConnect,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

