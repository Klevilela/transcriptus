const fs = require("fs");
const gtts = require("gtts");

// Define a constant object for text to IPA conversion
const textToIpa = {};

// Read dictionary
const wordsInLine = fs.readFileSync("./ipadict.txt", "utf-8");

// Parse the file and store the text-to-IPA mappings in the textToIpa object
const parsingFile = (lines) => {
  for (const line of lines) {
    const [word, ipa] = line.split(/\s+/g);
    textToIpa[word] = ipa;
  }
  console.log(`Done parsing. ${Object.keys(textToIpa).length} items loaded.`);
};

// Call the parsingFile function with the words in lines
parsingFile(wordsInLine.split("\n"));

// Find the IPA text for an English word
const findWord = (word) => {
  let text = textToIpa[word];
  if (text === undefined) {
    return undefined;
  }

  // Iterate from 1 - 3. There are no more than 3 extra pronunciations.
  for (let i = 1; i < 4; i++) {
    // See if pronunciation i exists...
    if (typeof textToIpa[word + "(" + i + ")"] != "undefined") {
      // ...If it does we know that the error should be multi and the text
      // is always itself plus the new pronunciation
      error = "multi";
      text += " / " + textToIpa[word + "(" + i + ")"];
      // ...Otherwise no need to keep iterating
    } else {
      break;
    }
  }

  return text;
};

// Translate an IPA text to English words
const translateWord = (wordIPA) => {
  let wordEn = "";

  for (const char of wordIPA) {
    switch (char) {
      case "b":
        wordEn += "b";
        break;
      case "l":
        wordEn += "l";
        break;
      case "ʌ":
        wordEn += "ah";
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
        wordEn += "ae";
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
        wordEn += "uh";
        break;
      case "aʊ":
        wordEn += "au";
        break;
      case "u":
        wordEn += "uw";
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
      case "v":
        wordEn += "v";
        break;
      case "t":
        wordEn += "t";
        break;
      case "ɛ":
        wordEn += "é";
        break;
      case "ɔ":
        wordEn += "ao";
        break;
      case "ʧ":
        wordEn += "ch";
        break;
      case "ər":
        wordEn += "êr";
        break;
      case "ɪ":
        wordEn += "ih";
        break;
      case "j":
        wordEn += "y";
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
        wordEn += "aa";
        break;
      case "ŋ":
        wordEn += "ng";
        break;
      case "ɚ":
        wordEn += "er";
        break;
      case "ð":
        wordEn += "dh";
        break;
      case "/":
        wordEn += " " + "ou" + " ";
        break;
      case "ʒ":
        wordEn += "zh";
        break;
      case "ʃ":
        wordEn += "sh";
        break;
      case "ŋ":
        wordEn += " ";
        break;
      case "ˈ":
        wordEn += "ˈ";
        break;
      case "ʤ":
        wordEn += "j";
        break;
    }
  }
  return wordEn;
};

module.exports = { findWord, translateWord };
