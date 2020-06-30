const moneydb = require("../models/money");
const { RichEmbed } = require("discord.js");
const rgb = require("../hexrgb.js");
exports.run = (client, message, args) => {
  let member = message.mentions.members.first() || message.author;
  // let guildb = new db.table("guild_" + message.guild.id);
  let roletavar = RandInt(-75, 100);
  if (roletavar == 0) roletavar = 1;
  let winlose;
  moneydb.findOne(
    {
      guildID: message.guild.id,
      userID: message.author.id,
    },
    (err, money) => {
      if (err) throw err;
      if (!money) {
        const newmoneydb = new moneydb({
          guildID: message.guild.id,
          userID: message.author.id,
          money: roletavar,
        });
        newmoneydb.save();
      } else {
        money.money = money.money + Number(roletavar);
        money.save();
      }
    }
  );
  const dadinhoEmbed = new RichEmbed()
    .setTitle("Roletando...")
    .setColor(rgb.hexrgb())
    .setDescription(
      `O ${member} ${
        roletavar < 0 ? (winlose = "perdeu") : (winlose = "ganhou")
      } **R$${Math.abs(roletavar)}**`
    );
  message.channel.send(dadinhoEmbed);
};

function RandInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
