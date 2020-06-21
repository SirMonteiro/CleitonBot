const { RichEmbed } = require("discord.js");
const rgb = require("../hexrgb.js");
const weather = require("weather-js");
const translate = require("translatte");
exports.run = async (client, message, args) => {
  if (!args[0])
    return message.reply(
      "Você tem que especificar uma cidade, ex: " +
        client.prefix +
        "clima brasília"
    );
  weather.find({ search: args[0], degreeType: "C" }, async function (
    err,
    result
  ) {
    if (err) return;
    if (!result[0])
      return message.reply("A cidade que você colocou é inválida");
    const msg = await message.channel.send("Recuperando dados...");
    translate(result[0].current.skytext, { from: "en", to: "pt" }).then(
      (textoceu) => {
        const embed = new RichEmbed()
          .setTitle(`:map: Clima atual da cidade ${result[0].location.name}`)
          .setColor(rgb.hexrgb())
          .setThumbnail(result[0].current.imageUrl)
          .setDescription("O clima está: " + textoceu.text)
          .addField(
            ":thermometer: Temperatura:",
            `${result[0].current.temperature}ºC`,
            true
          )
          .addField(
            ":hotsprings: Sensação térmica:",
            `${result[0].current.feelslike}ºC`,
            true
          )
          .addField(
            ":droplet: Umidade:",
            `${result[0].current.humidity}%`,
            true
          )
          .addField(
            ":wind_blowing_face: Vento:",
            `${result[0].current.windspeed}`,
            true
          )
          .setFooter(
            `Atualizado em: ${result[0].current.date}, as ${result[0].current.observationtime}`
          );
        msg.edit(embed);
      }
    );
  });
};
