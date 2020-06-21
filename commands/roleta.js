const db = require("quick.db");
const { RichEmbed } = require("discord.js");
const rgb = require("../hexrgb.js");
exports.run = (client, message, args) => {
  let member = message.mentions.members.first() || message.author;
  let guildb = new db.table("guild_" + message.guild.id);
  let roletavar = RandInt(-75, 100);
  if (roletavar == 0) roletavar = 1;
  let winlose;
  if (roletavar < 0) {
    winlose = "perdeu";
    guildb.subtract(`money_${member.id}`, Math.abs(roletavar));
    if (guildb.get(`money_${member.id}`) < 0)
      guildb.set(`money_${member.id}`, 0);
  } else {
    winlose = "ganhou";
    guildb.add(`money_${member.id}`, roletavar);
  }
  const dadinhoEmbed = new RichEmbed()
    .setTitle("Roletando...")
    .setColor(rgb.hexrgb())
    .setDescription(`O ${member} ${winlose} **R$${Math.abs(roletavar)}**`);
  message.channel.send(dadinhoEmbed);
};

function RandInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
