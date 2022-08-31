const UmutDiscord = require('discord.js');
const UmutClient = new UmutDiscord.Client();
const ayarlar = require('../ayarlar.json');
const p = ayarlar.prefix

exports.run = (client, message) => {

 const UmutEmbed = new UmutDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Eğlence Yardım Menüsü`)
 .setDescription(`
<a:AyarGif:939938577587003504> **${p}atatürk** \n-> Atatürk Fotoğrafı Atar
<a:AyarGif:939938577587003504> **${p}çay** \n-> Bi Arkadaşına Çay Ismarlarsın
<a:AyarGif:939938577587003504> **${p}kahve** \n-> Bi Arkadaşına Kahve Ismarlarsın
<a:AyarGif:939938577587003504> **${p}düello** \n-> Arkadaşınızla 1 vs 1 Düello Atarsınız
<a:AyarGif:939938577587003504> **${p}haçker** \n-> Hack Olursun
<a:AyarGif:939938577587003504> **${p}iltifat** \n-> Bi Arkadaşına İtrif Edersin
<a:AyarGif:939938577587003504> **${p}kaçcm** \n-> Kaçcm Oldu Bakarsın Sen Anladın
<a:AyarGif:939938577587003504> **${p}korona** \n-> Türiye Korona Bilgise Bakarsın
<a:AyarGif:939938577587003504> **${p}tokat** \n-> Arkadaşınıza Tokat Atarsınız
<a:AyarGif:939938577587003504> **${p}havadurumu** \n-> İstedin İlin Hava Duruma Bakarsın
`)
 .setFooter(`Umutsu Bot`)
 .setTimestamp()
 message.channel.send(UmutEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Eğlence'],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
