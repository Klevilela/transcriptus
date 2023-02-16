const express = require("express");
const router = express.Router();
const dictOp = require("./operationsDict");

// router to save the trasncription of word
router.post("/text/save", (req, res) => {
  var text = req.body.text.toLowerCase();
  dictOp.generateAudio(text);
  text = dictOp.findWord(text);
  var engWord = dictOp.translateWord(text);
  text = res.render("../views/transcripited/newText.ejs", {
    text: text,
    engWord: engWord,
  });
});

module.exports = router;
