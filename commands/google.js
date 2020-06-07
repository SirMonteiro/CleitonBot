const {RichEmbed} = require('discord.js');
const rgb = require('../hexrgb.js')
const rp = require('request-promise');
const cheerio = require('cheerio');
exports.run = (client, message, args) => {
  if(!args[0]) return message.reply('Digite o termo de pesquisa, ex: ' + client.prefix + 'google discord')
  rp('http://www.google.com/search?btnI&q=' + args.join(" "))
    .then( html => {
    let $ = cheerio.load(html);
    if(!$('.fTk7vd a').text().includes("http")) return message.reply("esse comando é meio bugado, me parace que esse termo me bugou!")
    let site = $('.fTk7vd a')[0].children[0].data
    const embed = new RichEmbed()
      .setTitle(':page_facing_up: O primeiro link da pesquisa foi o:')
      .setColor(rgb.hexrgb())
      .setDescription(site);
      message.channel.send(embed);
    });
}