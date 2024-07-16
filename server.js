import express from "express";
import { router as apiRouter } from "./routes/index.js";
// import sequelize connection
import { dbConnect } from "./config/connection.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(apiRouter);

// sync sequelize models to the database, then turn on the server
dbConnect.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});

 