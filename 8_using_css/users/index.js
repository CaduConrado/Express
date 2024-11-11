const express = require("express");
const path = require("path");
const router = express.Router();

const basePath = path.join(__dirname, "../templates");

router.get("/hello", (req, res) => {
  res.sendFile(`${basePath}/hello.html`);
});

router.get("/login", (req, res) => {
  res.sendFile(`${basePath}/login.html`);
});

router.post("/login", (req, res) => {
  console.log(req.body);
});

module.exports = router;
