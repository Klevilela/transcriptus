const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const dictOp = require("./dict/operationsDict");
const gAudio = require("./dict/audioGenerator");

// define view engine to ejs
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// define path of static files
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

// router to save the transcription of word
app.post("/text/save", (req, res) => {
  var text = req.body.text.toLowerCase();

  // generate audio
  gAudio.generateAudio(text);
  // traslating IPA to words
  text = dictOp.findWord(text);
  var engWord = dictOp.translateWord(text);

  res.render("../views/transcripited/newText.ejs", {
    text: text,
    audioSrc: "../audio.mp3",
    engWord: engWord,
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server running...");
});
