const express = require("express");
const dotenv = require("dotenv");
const app = express();
const port = 3000;
dotenv.config();


console.log(process.env)

app.get("/", (req, res) => {
  res.send("Home");
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
