exports.run = async (client, message, args) => {
  if (!message.member.roles.some((r) => ["BAN_MEMBERS"].includes(r.name)))
    return message.reply(
      "Desculpe, mas você não é um moderador ou acima para realizar esse comando."
    );

  let member = message.mentions.members.first();
  if (!member)
    return message.reply("Por favor, mencione um membro válido desse servidor");
  if (!member.bannable)
    return message.reply(
      "Eu não posso dar ban nesse membro! Ele tem um cargo maior? Eu posso dar ban em alguem?"
    );

  let reason = args.slice(1).join(" ");
  if (!reason) reason = "Nenhuma razão especificada";

  await member
    .ban(reason)
    .catch((error) =>
      message.reply(
        `Desculpe ${message.author} Eu não consigo banir por causa : ${error}`
      )
    );
  message.reply(
    `${member.user.tag} Foi banido por ${message.author.tag} porque: ${reason}`
  );
};
