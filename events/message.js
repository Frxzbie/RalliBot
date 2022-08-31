const ayarlar = require("../ayarlar.json");
const db = require("croxydb");
const database = require('croxydb');
const Discord = require("discord.js");

module.exports = async message => {
  let karaliste = db.fetch(`sebep_${message.author.id}`);
  let prefix = ayarlar.prefix;
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0].slice(prefix.length);

  let params = message.content.split(" ").slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }

 if (cmd) {
    if(message.author.id !== "721558814112874598")
    if(cmd && cmd.help.name !== 'bakım-modu') {
      const neblmölçmedimikamk = await require('croxydb').fetch(client.user.id);
      if(neblmölçmedimikamk == true) {
      var DURATION = require('humanize-duration');
      const chimped = await db.fetch(client.user.id+':)');
      var TIMESTAMP = Date.now() - chimped.time;
      var RESULT = DURATION(TIMESTAMP, { language: 'tr', round: true, conjunction: ', ', serialComma: false });
      message.react('<a:hayr:938442656630063164>');
      return message.reply(`***${client.user.username}*** şu anda bakımda.\nYaklaşık ***${RESULT} önce*** bakıma alınmış.\nBakıma alan: ***${chimped.author.tag}***`);
      };
      };
      
    if (perms < cmd.conf.permLevel) return;
    if (db.fetch(`cokaradalistere_${message.author.id}`)) return message.channel.send("**Olamaz Sen Botun Karalistesinde Bulunuyorsun Botu Kullanamazsın Eğer Bunun Yanlış Oldu Düşüyorsan Buyur Gel** https://discord.gg/WfmR8H2QZ8")
    cmd.run(client, message, params, perms);
  }
};