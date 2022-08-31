const Discord = require("discord.js");
const db = require("croxydb");
const ms = require('ms');

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.reply("Yetersiz Yetki Gereken `Kanalları Yönet`");
  let cst2 = args[0];
  if (!cst2)
    return message.reply("**Bir Süre Belirtmen Gerek!\nÖrnek: `!nuke 10m`**");

  let x = cst2;
  let ise = x
    .split(" ")
    .filter(val => val.match(/\d+/))
    .map(x =>
      x
        .split("")
        .filter(val => val.match(/\d+/))
        .join("")
    );

  let sures;
  let cst1 = ise[0];
  if (cst2.includes("s")) sures = cst1 * 1000;
  if (cst2.includes("m")) sures = cst1 * 60 * 1000;
  if (cst2.includes("h")) sures = cst1 * 60 * 60 * 1000;
  if (cst2.includes("d")) sures = cst1 * 24 * 60 * 60 * 1000;

  let zaman = Date.now();

  let sure;
  let data = ms(sures);
  let s = data.seconds;
  let m = data.minutes;
  let h = data.hours;
  let d = data.days;
  if (s) {
    sure = `${s} Saniye`;
  }
  if (m) {
    sure = `${m} Dakika`;
  }
  if (h) {
    sure = `${h} Saat`;
  }
  if (d) {
    sure = `${d} Gün`;
  }

  db.set("csnuke." + message.channel.name + "_" + message.guild.id, {
    kanal: message.channel.name,
    author: message.author.id,
    sure: sures,
    sıra: message.channel.rawPosition,
    zaman: zaman
  });
  message.channel.send(
    new Discord.MessageEmbed()
      .setTitle("Oto Kanal Yenileyici")
      .setThumbnail(message.guild.iconURL())
      .setColor("GREEN")
      .setDescription(
        "Artık Bu Kanal Her Ayarladın Süre Geçtikten Sonra Oto Resetlenecek!"
      )
      .setTimestamp()
      .setFooter("Umutsu Bot")
  );


};
module.exports.conf = {
  aliases: []
};

module.exports.help = {
  name: "nuke"
};
