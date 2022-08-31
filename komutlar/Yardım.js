const UmutDiscord = require('discord.js');
const UmutClient = new UmutDiscord.Client();
const ayarlar = require('../ayarlar.json');

const Prefix = ayarlar.prefix

exports.run = (client, message) => {

 const UmutEmbed = new UmutDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Yardım Menüsü`)
 .setDescription(`
 <a:AyarGif:939938577587003504> **${Prefix}genel** \n-> Genel Komutlar için kullan
 <a:AyarGif:939938577587003504> **${Prefix}eğlence** \n-> Eğlence Komutlar için kullan
 <a:AyarGif:939938577587003504> **${Prefix}koruma-sistemi** \n-> Koruma Sistemi Göremek için Kullan
 <a:AyarGif:939938577587003504> **${Prefix}moderasyon** \n-> moderasyon Sistemi Göremek için Kullan
 <a:AyarGif:939938577587003504> **${Prefix}moderasyon2** \n-> moderasyon2 Sistemi Göremek için Kullan
 <a:AyarGif:939938577587003504> **${Prefix}abone-sistemi** \n-> Abone Sistemi Göremek İçin Kullan
 <a:AyarGif:939938577587003504> **${Prefix}kayıtsistemi** \n-> Kayıt Sistemi Göremek İçin Kullan
 <a:AyarGif:939938577587003504> **${Prefix}yardım-emoji** \n-> Emoji Sistemi Göremek İçin Kullan
 <a:AyarGif:939938577587003504> **${Prefix}yardım-backup** \n-> Backup Sistemi Göremek İçin Kullan
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
  name: 'yardım',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
