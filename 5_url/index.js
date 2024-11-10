const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

const baseUrl = path.join(__dirname, "templates");

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  res.sendFile(`${baseUrl}/users.html`);
  console.log(`Carregando usuário: ${id}`);
});

app.get("/", (req, res) => {
  res.sendFile(`${baseUrl}/index.html`);
});

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
