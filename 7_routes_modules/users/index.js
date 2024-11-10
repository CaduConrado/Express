const express = require("express");
const path = require("path");
const router = express.Router();

const basePath = path.join(__dirname, "../templates");

router.get("/cadaster", (req, res) => {
  res.sendFile(`${basePath}/cadaster.html`);
});

router.post("/cadaster", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const age = req.body.age;
  console.log(`Usuário: ${name}\nIdade: ${age}`);
});

module.exports = router;
