const { RichEmbed } = require("discord.js");
const rgb = require("../hexrgb.js");
const request = require("request");
exports.run = (client, message, args) => {
  request(
    {
      url: "https://dog.ceo/api/breeds/image/random",
      json: true,
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const embed = new RichEmbed()
          .setTitle(":dog: Aqui está seu cachorro aleatório:")
          .setColor(rgb.hexrgb())
          .setImage(body.message);
        message.channel.send(embed);
      }
    }
  );
};
