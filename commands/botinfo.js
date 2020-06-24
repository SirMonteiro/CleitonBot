const { RichEmbed } = require("discord.js");
const rgb = require("../hexrgb.js");
exports.run = async (client, message, args) => {
  let inline = true;
  let bicon = client.user.displayAvatarURL;
  let usersize = client.users.size;
  let chansize = client.channels.size;
  let uptimxd = client.uptime;
  let servsize = client.guilds.size;
  let botembed = new RichEmbed()
    .setColor(rgb.hexrgb())
    .setThumbnail(bicon)
    .addField("Nome do Bot", `:robot: [${client.user.username}](https://cleitonbot.sirmonteiro.ga/)`, inline)
    //.addField("Dono do Bot", ":detective: <@345954606544846852>", inline)
    .addField("Hospedado com o", ":file_cabinet: [Fosshost](https://fosshost.org/)", inline)
    .addField(
      "Biblioteca do Bot",
      ":notebook_with_decorative_cover: [Discord.js](https://discord.js.org/)",
      inline
    )
    .addField("Usuários", `:person_walking: ${usersize}`, inline)
    .addField("Servidores", `🛡 ${servsize}`, inline)
    .addField("Canais", `📁 ${chansize}`, inline)
    .addField("Criado em", "16/05/2020 15:36, horário de brasília")
    .setFooter(
      `Informações sobre: ${client.user.username}. Criado por: SirMonteiro#7498, Vonger#3958, Pão!?#3696`
    )

  message.channel.send(botembed);
};
