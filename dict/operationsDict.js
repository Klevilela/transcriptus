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
  const text = textToIpa[word];
  if (text === undefined) {
    return undefined;
  }
  return text;
};

const generateAudio = (text) => {
  const tts = new gtts(text, "en");
  tts.stream().pipe(fs.createWriteStream("audio.mp3"));
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

module.exports = { findWord, translateWord, generateAudio };
