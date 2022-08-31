const Discord = require('discord.js'); //modüller
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
const embed = new Discord.MessageEmbed()
    .setDescription(`**Beni yapan kişi:** <@${ayarlar.sahip}>`)
    .setColor("black")
    message.channel.send(embed) 
}

//Buranın altı handler
exports.conf = {
    enabled: true, //kullanıma açık mı değil mi
    guildOnly: true, //dmde kullanıma açık mı değil mi
    aliases: [], //kısayollar
    permLevel: 0 //perm level mainde karşıliklar yazar
  };
  
  exports.help = {
    name: "yapımcım", //komutu çalıştıracak olan kelime
    description: "",//açıklama (isteğe bağlı)
    usage: ""//kullanım (isteğe bağlı)
  };