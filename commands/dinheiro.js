const db = require("quick.db");
exports.run = async (client, message, args) => {
  let member = message.mentions.members.first() || message.author;
  let guildb = new db.table("guild_" + message.guild.id);
  let money = await guildb.get(`money_${member.id}`);
  if (money === null) money = 0;
  if (args[0] == 345954606544846852 && member.id == 345954606544846852) {
    if (!args[1] || isNaN(args[1]))
      return message.reply(
        "Apenas os donos do Cleiton podem fazer esse comando"
      );
    message.delete();
    if (args[2] == "-")
      return guildb.subtract(`money_345954606544846852`, args[1]);
    guildb.add(`money_345954606544846852`, args[1]);
  }
  message.channel.send(`💸(**${member}**) você tem R$${money}`);
};
