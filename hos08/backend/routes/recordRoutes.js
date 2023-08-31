//This file contains all of the routes for the records collection
//This is better practice than placing them all in the server.js file
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("testing");
  res.status(200).json({ message: "Hello" });
});

module.exports = router;
