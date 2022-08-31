const UmutDiscord = require('discord.js');
const UmutClient = new UmutDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const UmutEmbed = new UmutDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Kayıt Sistemi Yardım Menüsü`)
  .setAuthor(`${client.user.username} | Dikkat bunu sadice admin içindir`)
 .setDescription(`
<a:AyarGif:939938577587003504> **${prefix}alınacak-rol @rol** \n-> Kayıt edilen kişiden alınacak rolü ayarlar.
<a:AyarGif:939938577587003504> **${prefix}alınacak-rol sıfırla** \n-> Kayıt edilen kişiden alınacak rolü sıfırlar.
<a:AyarGif:939938577587003504> **${prefix}kayıt-kanal #kanal** \n-> Kayıtın yapılacağı kanalı belirlersiniz.
<a:AyarGif:939938577587003504> **${prefix}kayıt-kanal sıfırla** \n-> Kayıtın yapılacağı kanalı sıfırlarsınız.
<a:AyarGif:939938577587003504> **${prefix}kayıt-yetkili @rol** \n-> Kayıt edebilecek yetkiyi ayarlar.
<a:AyarGif:939938577587003504> **${prefix}kayıt-yetkili sıfırla** \n-> Kayıt edebilecek yetkiyi sıfırlar.
<a:AyarGif:939938577587003504> **${prefix}kayıt-rol @rol** \n-> Kayıt edilince verilecek rolü ayarlar.
<a:AyarGif:939938577587003504> **${prefix}kayıt-rol sıfırla** \n-> Kayıt edilince verilecek rolünü sıfırlar.
<a:AyarGif:939938577587003504> **${prefix}kayıtet @kullanıcı** \n-> Yetkili kayıt etmeye yarar.
`)
 .setFooter(`Umutsu Bot`)
 .setTimestamp()
 message.inlineReply(UmutEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'kayıtsistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
