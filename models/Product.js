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
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      autoIncrement: true,
      primaryKey: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize: dbConnect,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

