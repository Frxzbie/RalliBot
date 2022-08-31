const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("croxydb")

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply(`Bu Komutu Kullanabilmek İçin **Yönetici** İznine Sahip Olmalısın!`);

  let channel = message.mentions.channels.first();
  if (!channel) {
    return message.reply("Bir kanal etiketleyin");
  }
  db.set(`gçkanal_${message.guild.id}`, channel.id);
  message.channel.send(`:white_check_mark: | ** Hoşgeldin Sistemi Aktifleştirildi - Güle Güle kanalı ${channel} Olarak Ayarlandı.** `);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gç-ayarla","hg-bb","gelen-giden","giriş-çıkış-ayarla","gelen-giden-aç","gelen-giden-ayarla"],
  permLevel: 0
};

exports.help = {
  name: "resimligirişçıkış",
  description: "Giriş Çıkış Kanalını Ayarlar.",
  usage: "gç-ayarla <#kanal>"
};
