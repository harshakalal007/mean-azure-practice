require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({message: "Lekim server is working"});
})

app.listen(3008, () => {
  console.log("Server connnected.")
});