const moneydb = require("../models/money");
const { RichEmbed } = require("discord.js");
const rgb = require("../hexrgb.js");
exports.run = async (client, message, args) => {
  const embed = new RichEmbed()
    .setTitle(":bar_chart: Aqui está os mais ricos do servidor:")
    .setColor(rgb.hexrgb())
  moneydb.find({ guildID: message.guild.id }).sort([['money', 'descending']]).exec((err, res) => {
    if (err) throw err
    if (res.length === 0) {
      embed.setDescription('ninguém tem dinheiro nesse servidor!, jogue para conseguir ficar no placar.');
    } else {
      let placar = ""
      for (i = 0; res.length > 10 ? i < 10 : i < res.length; i++) {
        let member = message.guild.members.get(res[i].userID) || "Membro saiu do servidor"
        if (member === "Membro saiu do servidor") {
          placar += `${i + 1}. **${member}** - R$${res[i].money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} coins\n`
        } else {
          placar += `${i + 1}. **${member.user.username}** - R$${res[i].money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} coins\n`
        }
        embed.setDescription(placar)
      }
    }
    message.channel.send(embed);
  })
};
