const Discord = require('discord.js');
const db = require("croxydb")

exports.run = async (client, message, args) => {
      if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send(" Yetersiz **yetki!**")
  
  if (!args[0]){
    message.channel.send('!sa-as aç/kapat Yazmalısın')
  }
  if (args[0] === 'aç'){
    message.channel.send("Sa-as açık!")
    
    db.set(`saas_${message.guild.id}`, "acik")
  }
  if (args[0] === 'kapat'){
    message.channel.send('Başarıyla kapatıldı')
    
    db.set(`saas_${message.guild.id}`, "kapali")
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "sa-as",
  description: "Sa as açar yada kapatır.",
  usage: "sa-as"
}