const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5050;
const app = express();
const connectDB = require("./config/db");

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/records", require("./routes/recordRoutes"));
