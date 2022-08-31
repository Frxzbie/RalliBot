const UmutDiscord = require('discord.js');
const UmutClient = new UmutDiscord.Client();
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = (client, message) => {

 const UmutEmbed = new UmutDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Genel Yardım Menüsü`)
 .setDescription(`
 <a:AyarGif:939938577587003504> **${Prefix}ping** \n-> Botun Ping Bakarsın.
 <a:AyarGif:939938577587003504> **${Prefix}korona** \n-> Botun Ping Bakarsın.
 <a:AyarGif:939938577587003504> **${Prefix}istatistik** \n-> Botun istatistik Bakarsın.
 <a:AyarGif:939938577587003504> **${Prefix}yapımcım** \n-> Benim Yapımcıma Bakarsın
 <a:AyarGif:939938577587003504> **${Prefix}bugbildir** \n-> Bot hata Olduda Yapımcıma Bildir
 <a:AyarGif:939938577587003504> **${Prefix}davet** \n-> Botu Sunucu Davet Emek İçin Kullan
 <a:AyarGif:939938577587003504> **${Prefix}roles** \n-> Sunucu Roleri Sıralar
`)
 .setFooter(`Umutsu Bot`)
 .setTimestamp()
 message.channel.send(UmutEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'genel',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
