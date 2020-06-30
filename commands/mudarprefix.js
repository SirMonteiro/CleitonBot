const guildsdb = require("../models/guilds");
const { RichEmbed } = require("discord.js");
const rgb = require("../hexrgb.js");
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    if (message.member.id != "345954606544846852") {
      return message.reply(
        'Infelizmente apenas membros com a permissão "ADMINISTRATOR" podem realizar esse comando!, Você pode tentar falar com um desses membros, vai que eles ouvem sua prece 😉'
      );
    }
  }
  if (!args[0])
    return message.reply(
      "Você esqueceu de especificar a prefix nova que irá usar!"
    );
  if (args[0].length > 3)
    return message.reply("O novo prefix não pode ter mais de 3 caracteres!");
  let guildb = await guildsdb.findOneAndUpdate({ id: message.guild.id }, { $set: { prefix: args[0] }}, { new: true })
  const mudarprefix = new RichEmbed()
    .setTitle("Eba! Agora o Cleiton é chamado diferente no seu server.")
    .setColor(rgb.hexrgb())
    .setDescription(
      "Agora para chamar o Cleiton você deve usar a nova prefix, um exemplo abaixo:"
    )
    .addField("Sua antiga prefix:", client.prefix + "help", true)
    .addField("Sua nova prefix:", guildb.prefix + "help", true);
  //message.channel.send('Seu novo prefix é: ' + guildb.get('prefix'))
  message.channel.send(mudarprefix);
};
