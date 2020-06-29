const db = require("../models/guild");
const cooldown = new Set();
module.exports = async (client, message) => {
  if (message.author.bot || message.channel.type === "dm") return;

  let prefix = await db.findOne({ id: message.guild.id })
  prefix = prefix.prefix
  if (!prefix) prefix = "?";
  client.prefix = prefix;

  const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
  //"slice(client.config.prefix.length)."
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command);

  if (message == "Cleiton?" && message.toString().length == 8) {
    message.channel.send(
      'Olá, para saber todos os comandos digite "' + client.prefix + 'help".'
    );
  }

  if (
    message.toString().toLowerCase() == "f" &&
    message.toString().length == 1
  ) {
    message.channel.send(message.author + ", pagou seu respeito!");
  }

  if (message.content.indexOf(client.prefix) !== 0) return;

  if (!cmd) return;

  if (cooldown.has(message.author.id)) {
    message.delete();
    return message.reply(
      "Acalme-se, você somente pode mandar mensagem a cada 2 segundos"
    );
  }
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    cooldown.add(message.author.id);
  }
  setTimeout(() => {
    cooldown.delete(message.author.id);
  }, 2000);

  cmd.run(client, message, args);
};
