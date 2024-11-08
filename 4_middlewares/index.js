const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

const basePath = path.join(__dirname, "templates");

const checkAuth = function (req, res, next) {
  req.authStatus = false;

  if (req.authStatus) {
    console.log("Você está logado.");
    next();
  } else {
    console.log("Você não está logado.");
    next();
  }
};

app.use(checkAuth);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
