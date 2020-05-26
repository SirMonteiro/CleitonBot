exports.run = (client, message, args) => {
    if(message.member.id == "337273866219028522" || message.member.id == "345954606544846852") {} else return message.reply("Você não é um dos melhores amigos do Cleiton para realizar esse comando.")
    if (!args || args.length < 1)
      return message.reply("⚠️ Escreva o comando que deseja dar reload!");
  
      const commandName = args[0];
  
      if(commandName == 'bot'){
        message.reply('Reiniciando o Cleiton...')
        setTimeout(() => { process.exit(1); }, 50);
      }
  
      if(!client.commands.has(commandName)) {
        return message.reply("⚠️ Comando inexistente!");
      }
  
      delete require.cache[require.resolve(`./${commandName}.js`)];
  
      client.commands.delete(commandName);
      const props = require(`./${commandName}.js`);
      client.commands.set(commandName, props);
      message.reply(`✔️ O comando ${commandName} foi recarregado com sucesso!`);
      console.log(`✔️ O comando ${commandName} foi recarregado com sucesso!`)
  };