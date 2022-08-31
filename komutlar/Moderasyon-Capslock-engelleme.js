const Discord = require('discord.js');
const db = require('croxydb')
const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`❌ Bu Komutu Kullana Bilmek İçin \`Sunucuyu Yönet\` Yetkisine Sahip Olmalısın!`)
  
  let capslock = await db.fetch(`capslock_${message.guild.id}`)
  if (capslock) {
    db.delete(`capslock_${message.guild.id}`)
    message.channel.send(`✅  Capslock Engelleme Sistemi Kapatıldı!`)
  }
 
  if (!capslock) {
    db.set(`capslock_${message.guild.id}`, 'acik')
    message.channel.send(`✅  Capslock Engelleme Sistemi Aktif!`)
  }

};
exports.conf = {
  aliases: ['capslockengel','capslock','capslock-engel','cl']
};
exports.help = {
  name: 'capslock-engelleme'
};