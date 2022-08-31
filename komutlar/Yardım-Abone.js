const UmutDiscord = require('discord.js');
const UmutClient = new UmutDiscord.Client();
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = (client, message) => {
 const UmutEmbed = new UmutDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Yardım Menüsü`)
 .setDescription(`
<a:AyarGif:939938577587003504> **${Prefix}abone-yetkili ayarla @rol** \n-> Abone yetkilisini ayarlar.
<a:AyarGif:939938577587003504> **${Prefix}abone-log ayarla #kanal** \n-> Abone log kanalını ayarlar.
<a:AyarGif:939938577587003504> **${Prefix}abone-rol ayarla @rol** \n-> Abone rolünü ayarlar.
<a:AyarGif:939938577587003504> **${Prefix}abone @nick** \n-> Abone Sistemi Göremek İçin Kullan İster a Vere Bilirsinin
`)
 .setFooter(`Umutsu Bot`)
 .setTimestamp()
 message.inlineReply(UmutEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [`Abone-Sistemi`],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'abone-sistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
