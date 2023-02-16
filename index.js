const express = require("express");
const dictController = require("./dict/dictController");
const app = express();
const bodyParser = require("body-parser");

// define view engine to ejs
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// define path of static files
app.use(express.static("public"));

// use file in index
app.use("/", dictController);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server running...");
});
