const Discord = require("discord.js");

exports.run = function(client, message, args) {

let user = message.mentions.users.first();

if (message.mentions.users.size < 1)
return message

      .reply("**Kimi tokatlayacağımı etiketle de vurayım ağzının ortasına!**")
      .catch(console.error);

const EmbedFwhyCode = new Discord.MessageEmbed()

    .setColor("0x808080")
    .setDescription(
      message.author.username + ` ${user}` + "** adlı kişiyi, Tokatladı! 🖐️ **"
    )
    .setImage("https://cdn.discordapp.com/attachments/780396833675411516/938746875312472074/giphy.gif")
    .setFooter("Umutsu Bot", client.user.avatarURL);

message.channel.send(EmbedFwhyCode);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["tokat-at", "tokatat"],
  permLevel: 0
};

exports.help = {
  name: "tokat",
  description: "Belirtilen kişiyi, Tokatlar!",
  usage: "tokat"
};