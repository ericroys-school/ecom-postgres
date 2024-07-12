// require('dotenv').config();
// const Sequelize = require('sequelize');
// because import is >)
import "dotenv/config";
import { Sequelize } from "sequelize";

export const dbConnect = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "postgres",
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

