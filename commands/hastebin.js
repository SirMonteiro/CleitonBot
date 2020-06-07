const { RichEmbed } = require('discord.js');
const hastebin = require('hastebin');
const rgb = require('../hexrgb.js');
exports.run = async (client, message, args) => {
	if(!args[0]) return message.reply(`Você deve colocar o que quer mandar para o Hastebin, ex: ${client.prefix}hastebin O Cleiton é incrível`)
	let msg = await message.channel.send('Enviando mensagem para o Hastebin...')
	hastebin.createPaste(args.join(" "), {
		raw: false,
		contentType: 'text/plain',
		server: 'https://hastebin.com'
	}, {})
		.then(function(url) {
			const embed = new RichEmbed()
				.setTitle(':link: O link do Hastebin é:')
				.setColor(rgb.hexrgb())
				.setDescription(url + '.txt');
			msg.edit(embed);
		})
}