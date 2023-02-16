const fs = require("fs");

// objects
var textToIpa = {};

// reading dictionary
let wordsInLine = fs.readFileSync("./ipadict.txt", "utf-8");

// parsing the file
parsingFile = function (lines) {
  for (var i in lines) {
    var arr = lines[i].split(/\s+/g);
    textToIpa[arr[0]] = arr[1];
  }

  /* console.log(
    "Done parsing." + "\n" + Object.keys(textToIpa).length + " items loaded"
  ); */
};

parsingFile(wordsInLine.split("\n"));

// find an an english word's corresponding IPA text
findWord = function (word) {
  var text = textToIpa[word];
  /* for (let index = 1; index < 4; index++) {
    if (typeof textToIpa[word + "(" + index + ")"] != undefined) {
      text += textToIpa[word + "(" + index + ")"];
    } else {
      break;
    }
  } */
  return textToIpa[word];
};

// translation to English Words
translateWord = function (wordIPA) {
  let wordEn = "";
  for (let i = 0; i < wordIPA.length; i++) {
    switch (wordIPA[i]) {
      case "b":
        wordEn += "b";
        break;
      case "l":
        wordEn += "l";
        break;
      case "ʌ":
        wordEn += "â";
        break;
      case "d":
        wordEn += "d";
        break;
      case "dʒ":
        wordEn += "g";
        break;
      case "θ":
        wordEn += "th";
        break;
      case "h":
        wordEn += "rr";
        break;
      case "e":
        wordEn += "e";
        break;
      case "æ":
        wordEn += "é";
        break;
      case "p":
        wordEn += "p";
        break;
      case "y":
        wordEn += "i";
        break;
      case "i":
        wordEn += "ii";
        break;
      case "aɪ":
        wordEn += "ai";
        break;
      case "oʊ":
        wordEn += "ow";
        break;
      case "ʊ":
        wordEn += "u";
        break;
      case "aʊ":
        wordEn += "au";
        break;
      case "u":
        wordEn += "uu";
        break;
      case "ɔɪ":
        wordEn += "ói";
        break;
      case "ʊ":
        wordEn += "u";
        break;
      case "ə":
        wordEn += "á";
        break;
      case "k":
        wordEn += "k";
        break;
      case "m":
        wordEn += "m";
        break;
      case "n":
        wordEn += "n";
        break;
      case "s":
        wordEn += "s";
        break;
      case "t":
        wordEn += "t";
        break;
      case "ɪər":
        wordEn += "íar";
        break;
      case "ɛ":
        wordEn += "é";
        break;
      case "ɔ":
        wordEn += "ó";
        break;
      case "tʃn":
        wordEn += "tch";
        break;
      case "ər":
        wordEn += "êr";
        break;
      case "ɪ":
        wordEn += "i";
        break;
      case "j":
        wordEn += "i";
        break;
      case "a":
        wordEn += "a";
        break;
      case "g":
        wordEn += "g";
        break;
      case "z":
        wordEn += "z";
        break;
      case "u":
        wordEn += "uu";
        break;
      case "f":
        wordEn += "f";
        break;
      case "r":
        wordEn += "r";
        break;
      case "ɹ":
        wordEn += "r";
        break;
      case "w":
        wordEn += "w";
        break;
      case "o":
        wordEn += "o";
        break;
      case "ɑ":
        wordEn += "a";
        break;
      case "ŋ":
        wordEn += "n";
        break;
      case "ɚ":
        wordEn += "ur";
        break;
      case "ð":
        wordEn += "th";
        break;
    }
  }
  return wordEn;
};

module.exports = { findWord, translateWord };
