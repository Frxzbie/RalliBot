const Discord = require('discord.js');


exports.run = function(client, message, embed, params) {
  const ping = new Discord.MessageEmbed()

  .setColor('RED')
  .setImage('https://dummyimage.com/2000x500/33363c/ffffff&text='+ client.ws.ping +'%20MS')

    message.channel.send(ping);

};   
  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['p', 'ms'],
  permLevel: 0,
  kategori: "Bot"
};

exports.help = {
  name: 'ping', 
  description: 'Botun pingini gösterir',
  usage: 'ping'
};