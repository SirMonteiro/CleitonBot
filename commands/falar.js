const moneydb = require("../models/money");
exports.run = (client, message, args) => {
  if (!args[0])
    return message.reply("Você tem que colocar algo para eu falar!");
  //let guildb = new db.table("guild_" + message.guild.id);
  //let money = guildb.get(`money_${message.author.id}`);
  moneydb.findOne(
    { guildID: message.guild.id, userID: message.author.id },
    (err, money) => {
      if (err) throw err;
      if (!money)
        return message.reply(
          `você precisa de R$100 para poder usar o comando ${client.prefix}falar!`
        );
      const mensagem = args.join(" ");
      message.delete();
      message.channel.send(mensagem);
      money.money = money.money - 100;
      moneydb.save();
    }
  );
  /*money = money ? money.money : 0;
  if (money < 100)
    return message.reply(
      `você precisa de R$100 para poder usar o comando ${client.prefix}falar!`
    );
  //guildb.subtract(`money_${message.author.id}`, 100);
  const mensagem = args.join(" ");
  message.delete();
  message.channel.send(mensagem);*/
};
