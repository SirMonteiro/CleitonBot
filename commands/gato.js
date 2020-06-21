const { RichEmbed } = require("discord.js");
const rgb = require("../hexrgb.js");
const request = require("request");
exports.run = (client, message, args) => {
  request(
    {
      url: "http://aws.random.cat/meow",
      json: true,
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const embed = new RichEmbed()
          .setTitle(":cat: Aqui está seu gato aleatório:")
          .setColor(rgb.hexrgb())
          .setImage(body.file);
        message.channel.send(embed);
      }
    }
  );
};
