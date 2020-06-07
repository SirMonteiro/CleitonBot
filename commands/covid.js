/*const {RichEmbed} = require('discord.js');
const rp = require('request-promise');
const cheerio = require('cheerio');
exports.run = async (client, message, args) => {
    let msg = await message.channel.send("Recuperando dados...")
    rp('https://news.google.com/covid19/map?ceid=BR:pt-419&mid=/m/015fr&hl=pt-BR&gl=BR/')
    .then(html => {
    let $ = cheerio.load(html);
    let casosconfirmados = $('.qs41qe .UvMayb').text()
    let casosrecuperados = $('.gZvxhb .UvMayb').text()
    let mortes = $('.ckqIZ .UvMayb').text()
    let atualizado = $('.Yt6XT').text()
    const covidembed = new RichEmbed()
      .setTitle('Casos de COVID-19 no Brasil')
      .setColor(0xFF0000)
      .setDescription("Casos confirmados: " + casosconfirmados + "\n" + "Casos recuperados: " + casosrecuperados + "\n" + "Mortes: " + mortes)
      .setFooter(atualizado + "\nFonte: Wikipédia")
      msg.edit(covidembed);
  })
}*/
const { RichEmbed } = require('discord.js');
const rp = require('request-promise');
const translate = require('translatte');
exports.run = async (client, message, args) => {
	if (!isNaN(args[0])) return message.reply('Diga um nome de um país válido')
	let url = `https://disease.sh/v2/countries/${args[0]}`
	if (!args[0]) { url = 'https://disease.sh/v2/all'; }
	let msg = await message.channel.send("Recuperando dados...")
	rp({ uri: url, json: true }).then((res) => {
		if (!args[0]) { res.country = 'mundo' }
		translate(res.country, { from: 'en', to: 'pt' }).then(pais => {
			let casosconfirmados = res.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			let casosrecuperados = res.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			let mortes = res.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			let attfulldate = new Date(res.updated)
			let atualizado = 'Atualizado em ' + Number(attfulldate.getHours() - 3) + ':' + attfulldate.getMinutes()
			if (!res.countryInfo) {
				res.countryInfo = { flag: '' }
				res.countryInfo.flag = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/800px-Flag_of_the_United_Nations.svg.png'
			}
			const covidembed = new RichEmbed()
				.setTitle(`Casos de COVID-19 no ${pais.text}`)
				.setColor(0xFF0000)
				.setDescription("Casos confirmados: " + casosconfirmados + "\n" + "Casos recuperados: " + casosrecuperados + "\n" + "Mortes: " + mortes)
				.setFooter(atualizado + "\nFonte: Worldometers")
				.setThumbnail(res.countryInfo.flag)
			msg.edit(covidembed);
		})
	}).catch(err => { msg.edit('País não encontrado ou sem casos') })
}