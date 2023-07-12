const express = require("express");
const dotenv = require("dotenv");

const morgan = require("morgan");
const cors = require("cors");

dotenv.config();

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`Node Server Running on Port ${process.env.PORT}`);
});
