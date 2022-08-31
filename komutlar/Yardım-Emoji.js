const Discord = require('discord.js');
const Client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

const Prefix = ayarlar.prefix

exports.run = (client, message) => {

 const Embed = new Discord.MessageEmbed()
    .setTitle("Emoji Rol Yardım Menüsü")
    .setDescription(`\`${ayarlar.prefix}channel <#kanal>\` - Tepki Eklenecek Mesajın Olduğu Kanalı Ayarlarsınız!
    \`${ayarlar.prefix}message <mesaj-id>\` - Tepki Eklenecek Mesajı Ayarlarsınız!
    \`${ayarlar.prefix}rolekle <@rol> ❤️\` - Tepkiye Basınca Verilecek Rolü ve Tepkiyi Ayarlarsınız!
    \`${ayarlar.prefix}delete <mesaj-id>\` - Belirtilen Mesajdaki Tepki Rollerini Silersiniz!
    \`${ayarlar.prefix}list\` - Sunucunuzda Aktif Olan Emoji Rolleri Gösterir!`)
    .setColor("BLUE")
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    message.channel.send(Embed)

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "yardım-emoji"
};
