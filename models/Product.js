// import important parts of sequelize library
// const { Model, DataTypes } = require('sequelize');
import { Sequelize } from 'sequelize';
const {Model, DataTypes} = Sequelize;
// import our database connection from config.js
// const sequelize = require('../config/connection');
import { dbConnect } from '../config/connection.js';

// Initialize Product model (table) by extending off Sequelize's Model class
export class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
  },
  {
    sequelize: dbConnect,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

