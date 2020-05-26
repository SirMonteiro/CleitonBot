const {RichEmbed} = require('discord.js');
const rgb = require('../hexrgb.js')
exports.run = (client, message, args) => {
  if(!args[0]) return message.reply('Digite uma cor em hexadeximal, ex: ' + client.prefix + 'cor #000000')
  let cor = args[0].replace('#', '')
  if(!/^#[0-9A-F]{6}$/i.test('#' + cor)) return message.reply('Digite uma cor em hexadeximal, ex: ' + client.prefix + 'cor #000000  ')
  let hex2rgb = hexToRgb(`#${cor}`)
  const embed = new RichEmbed()
      .setTitle(':art: A cor selecionada foi a:')
      .setColor(rgb.hexrgb())
      .addField('Hex:', `#${cor}`, true)
	    .addField('RGB:', `${hex2rgb.r}, ${hex2rgb.g}, ${hex2rgb.b}`, true)
      .setImage(`https://dummyimage.com/1280x720/${cor}/${cor}.jpg`);
  message.channel.send(embed);
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
