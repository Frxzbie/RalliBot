const Discord = require('discord.js');
const db = require("croxydb")
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
if(message.author.id !== ayarlar.sahip) return;

function gönderkardesim(content) {
const infoEmbed = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(content)
.setTimestamp()
.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }));
return message.channel.send(infoEmbed)
};

const durum = await db.fetch(client.user.id);
if(durum == true) {

await db.delete(client.user.id);
return gönderkardesim('Bakım artık sona erdi.');

} else {

await db.set(client.user.id, true);
db.set(client.user.id+':)', { 
author: message.author,
time: db.now() 
});

return gönderkardesim('Bakım modu açıldı.\nArtık hiç bir kimse komutları kullanamayacak.');
};


}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bakım'],
  permLevel: 0
};
 
exports.help = {
  name: 'bakım-modu'
};