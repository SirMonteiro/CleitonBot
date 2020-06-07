const piadasLib = require('piadas-library')
const {RichEmbed} = require('discord.js');
const rgb = require('../hexrgb.js')
exports.run = async (client, message, args) => {
	const PiadasClient = new piadasLib();
	const piada = await PiadasClient.randomPiada()
	const embed = new RichEmbed()
		.setTitle(':joy: Aqui está sua piada aleatória')
    .setColor(rgb.hexrgb())
		.setDescription(piada.question + "\n\n" + piada.answer)
	message.channel.send(embed)
	//console.log(piada)
}