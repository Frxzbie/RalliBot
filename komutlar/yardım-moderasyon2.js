const Discord = require('discord.js');
const Client = new Discord.Client();
const ayarlar = require('../ayarlar.json')
const p = ayarlar.prefix

exports.run = (client, message) => {

 const Embed = new Discord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Moderasyon2 Yardım Menüsü`)
 .setDescription(`
<a:AyarGif:939938577587003504> **${p}küfür-engel** \n-> Küfür Engel Sistemi
<a:AyarGif:939938577587003504> **${p}küfür-log** \n-> Küfür Log Açar
<a:AyarGif:939938577587003504> **${p}reklamengel** \n-> Reklam Engel Sistemi
<a:AyarGif:939938577587003504> **${p}reklamlog** \n-> Relam Log Açar
`)
 .setFooter("Umutsu Bot")
 .setTimestamp()
 message.channel.send(Embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mod2'],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'moderasyon2',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
