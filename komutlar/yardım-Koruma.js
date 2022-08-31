const Discord = require('discord.js');
const Client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = (client, message) => {
 const Embed = new Discord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Koruma Sistemi Yardım Menüsü`)
 .setDescription(`
<a:AyarGif:939938577587003504> **${Prefix}botkoruma** \n-> Bot Koruma Sistemi Aktif Eder Sunucu Kimse Bot Sokamaz <Bakımda>
`)
 .setFooter(`Umutsu Bot`)
 .setTimestamp()
 message.channel.send(Embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'koruma-sistemi',
  description: 'koruma-sistemi',
  usage: 'koruma-sistemi'
};
