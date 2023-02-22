const gTTS = require("gtts");

// Função para gerar o áudio
const generateAudio = (text) => {
  var gtts = new gTTS(text, "en");

  gtts.save("./public/audio.mp3", function (err, result) {
    if (err) {
      throw new Error(err);
    }
    console.log("Text to speech converted!");
  });
};

module.exports = { generateAudio };
