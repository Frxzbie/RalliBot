const Discord = require('discord.js');

exports.run = (client, message, args) => {
   message.reply('heçkırlık başlıyor!');
    const embed = new Discord.MessageEmbed()
    .setAuthor('Şuan Heçkırlandın!')
    .setColor()
    .setDescription(message.author.username+  " Seni Haçkledi! H.o :smiling_imp: ")
     .setImage(`https://media.giphy.com/media/pOKrXLf9N5g76/giphy.gif`)
    return message.channel.send(embed);
};

exports.conf = {
  aliases: ["haçker"]
};

exports.help = {
  name: 'haçker'
};