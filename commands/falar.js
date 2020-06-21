const db = require("quick.db");
exports.run = (client, message, args) => {
  if (!args[0])
    return message.reply("Você tem que colocar algo para eu falar!");
  let guildb = new db.table("guild_" + message.guild.id);
  let money = guildb.get(`money_${message.author.id}`);
  if (money < 100)
    return message.reply(
      `você precisa de R$100 para poder usar o comando ${client.prefix}falar!`
    );
  guildb.subtract(`money_${message.author.id}`, 100);
  const mensagem = args.join(" ");
  message.delete();
  message.channel.send(mensagem);
};
