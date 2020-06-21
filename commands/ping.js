const { RichEmbed } = require("discord.js");
const rgb = require("../hexrgb.js");
exports.run = async (client, message) => {
  const ms = await message.channel.send("Ping?");
  const clientms = Math.abs(ms.createdTimestamp - message.createdTimestamp);
  //ms.edit('📡 Seu ping é: ' + clientms + 'ms / 🖥 Ping do bot com Server:' + Math.floor(client.ping) + 'ms');
  /*const pingembed = new RichEmbed()
      .setTitle('Pong!')
      .setColor(rgb.hexrgb())
      .setDescription('📡 Seu ping é: ' + clientms + 'ms \n\n 🖥 Ping do Cleiton com sua casa:' + Math.floor(client.ping) + 'ms');
      ms.edit(pingembed);*/

  const pingembed = new RichEmbed()
    .setTitle(":ping_pong: Pong!")
    .setColor(rgb.hexrgb())
    //.setDescription('📡 Seu ping é: ' + clientms + 'ms \n\n 🖥 Ping do Cleiton com sua casa:' + Math.floor(client.ping) + 'ms')
    /*.addField('.', 'Seu ping:')
      .addField(clientms + 'ms', 'Ping do Cleiton com sua casa:')
      .addField(Math.floor(client.ping) + 'ms', '.')*/
    .addField("**Seu ping:**", clientms + "ms")
    .addField(
      "**Ping do Cleiton com sua casa:**",
      Math.floor(client.ping) + "ms"
    );
  ms.edit(pingembed);
};
