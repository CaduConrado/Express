const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

//para ler o body
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const baseUrl = path.join(__dirname, "templates");

app.get("/user/cadaster", (req, res) => {
  res.sendFile(`${baseUrl}/cadastro.html`);
});

app.post("/user/cadaster", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const age = req.body.age;
  console.log(`Usuário: ${name}\nIdade: ${age}`);
});
app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
