exports.run = async (client, message, args) => {
  if (
    !message.member.hasPermission("KICK_MEMBERS", {
      checkAdmin: false,
      checkOwner: false,
    })
  ) {
    return message.reply(
      "Desculpe, mas você não é um moderador ou acima para realizar esse comando."
    );
  }

  let member =
    message.mentions.members.first() || message.guild.members.get(args[0]);
  if (!member)
    return message.reply("Por favor, mencione um membro válido desse servidor");
  if (!member.kickable)
    return message.reply(
      "Eu não posso dar kick nesse membro! Ele tem um cargo maior? Eu posso dar kick em alguem?"
    );

  let reason = args.slice(1).join(" ");
  if (!reason) reason = "Nenhuma razão especificada";

  await member
    .kick(reason)
    .catch((error) =>
      message.reply(
        `Desculpe ${message.author} Eu não posso dar kick porque : ${error}`
      )
    );
  message.reply(
    `${member.user.tag} Foi kickado por ${message.author.tag} por que: ${reason}`
  );
};
