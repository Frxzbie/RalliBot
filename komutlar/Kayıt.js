const discord = require('discord.js')//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552
const db = require('quick.db')//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552
const ayarlar = require("../ayarlar.json")

exports.run = async(client, message, args) => {//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552

let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552
let erkekrol = db.fetch(`erkekrol_${message.guild.id}`)//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)//Umut#9552//Umut#9552//Umut#9552//Umut#9552

if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(`Bu komudu kullanabilmen için <@&${kayıtçı}> adlı role sahip olman lazım!`)//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552
if(message.channel.id !== kanal) return message.channel.send(` Bu komudu sadece <#${kanal}> adlı kanalda kullanabilirsin!`)//Umut#9552//Umut#9552//Umut#9552
if (!erkekrol) return message.channel.send(`Sunucuda rol ayarlanmadığı için komut kullanılamaz!`)//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552


let member = message.mentions.members.first();//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552
member.roles.remove(alınacakrol)//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552
member.roles.add(erkekrol)//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552

const başarılı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())
.setTitle(`${client.user.username} | Kayıt`)//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552
.setColor(0x36393F)
.setDescription(`<@&${erkekrol}> Olarak kayıt edilen kullanıcı: ${member} \n <@&${erkekrol}> Olarak kayıt Eden Yetkili: <@!${message.author.id}>`)
.setThumbnail(member.avatarURL)
.setFooter(ayarlar.botismi)
message.channel.send(başarılı)
db.add(`kayıtsayı_${message.author.id}`, 1)
}



exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['Kayıt-et'],
  permlevel: 0
}
exports.help = {
  name: 'kayıtet',
  description: 'Kayıt Yapar',
  usage: 'kayıt @kullanıcı'
}
