const UmutDiscord = require('discord.js');
const UmutClient = new UmutDiscord.Client();
const ayarlar = require('../ayarlar.json');
const p = ayarlar.prefix

exports.run = (client, message) => {

 const UmutEmbed = new UmutDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Moderasyon Yardım Menüsü`)
 .setDescription(`
<a:AyarGif:939938577587003504> **${p}resimligirişçıkış** \n-> Belirtilen kanala belirtilen mesajla giriş çıkış ayarlarsınız
<a:AyarGif:939938577587003504> **${p}resimligirişçıkış-sıfırla** \n-> Belirtilen kanala belirtilen mesajla giriş çıkış sıfırlarsınız
<a:AyarGif:939938577587003504> **${p}sayaç** \n-> Sayacı ayarlarsınız
<a:AyarGif:939938577587003504> **${p}sa-as** \n-> Oto sa-ası ayarlarsınız
<a:AyarGif:939938577587003504> **${p}otorol** \n-> Sunucuya girenlere verilecek olan otorolü ayarlar
<a:AyarGif:939938577587003504> **${p}ban** \n-> Etiket Kişiyi Banlar
<a:AyarGif:939938577587003504> **${p}kick** \n-> Etiket Kişiyi Sunucudan Kickler
<a:AyarGif:939938577587003504> **${p}unban** \n-> İd Ban Açar
<a:AyarGif:939938577587003504> **${p}rolver** \n-> Etiketlenen Kişiye Rol Verir
<a:AyarGif:939938577587003504> **${p}rolal** \n-> Etiketlenen Kişiye Rol Alır
<a:AyarGif:939938577587003504> **${p}komut-ekle** \n-> Oto Cevap Komutu Ekler
<a:AyarGif:939938577587003504> **${p}komut-sil** \n-> Oto Cevap Komutu Siler
<a:AyarGif:939938577587003504> **${p}komutlar** \n-> Oto Cevap Komutlarını Listeler
<a:AyarGif:939938577587003504> **${p}capslock-engelleme** \n-> Sunucuda Büyük Harfleri Yasaklar
<a:AyarGif:939938577587003504> **${p}çekilişyap** \n-> Sunucuda Hızlı Çekiliş Yapar
<a:AyarGif:939938577587003504> **${p}nuke** \n-> Ayarladın Saat Kanala Restart Atar
<a:AyarGif:939938577587003504> **${p}nukesil** \n-> Ayarladın Saat Kanal Restart Kapatır
<a:AyarGif:939938577587003504> **${p}sunucu-panel** \n-> Sunucu Panel Kurar
<a:AyarGif:939938577587003504> **${p}geçiciodakur** \n-> Geçici Oda Sistemi Aktif Eder
<a:AyarGif:939938577587003504> **${p}geçiciodasil** \n-> Geçici Odas Sistemi Kaldırır
`)
 .setFooter(`Umutsu Bot`)
 .setTimestamp()
 message.channel.send(UmutEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mod'],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
