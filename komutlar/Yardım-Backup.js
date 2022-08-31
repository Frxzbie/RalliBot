 const UmutDiscord = require('discord.js');
const UmutClient = new UmutDiscord.Client();
const ayarlar = require('../ayarlar.json');

const Prefix = ayarlar.prefix

exports.run = (client, message) => {

 const UmutEmbed = new UmutDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Backup Yardım Menüsü`)
 .setDescription(`
 <a:AyarGif:939938577587003504> **${Prefix}backup-bilgi <backup id>** \n-> Backup kodu hakkında bilgiler alırsınız.
 <a:AyarGif:939938577587003504> **${Prefix}backup-oluştur** \n-> Sunucunun yedeğini oluşturursunuz.
 <a:AyarGif:939938577587003504> **${Prefix}backup-yükle <backup id>** \n-> Bir backup'ı sunucuya yüklersiniz. **Tüm herşey sıfırlanır**
`)
 .setFooter(`Umutsu Bot`)
 .setTimestamp()
 message.channel.send(UmutEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım-backup"],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'backup-yardım',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
