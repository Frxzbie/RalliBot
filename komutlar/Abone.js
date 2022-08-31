let Discord = require("discord.js");
let database = require("quick.db");
const ayarlar = require("../ayarlar.json");
const prefix = ayarlar.token

exports.run = async (client, message, args) => {
  let aboneyetkilisi = await database.fetch(
    `aboneyetkilisi.${message.guild.id}`
  );
  let abonelog = await database.fetch(`abonelog.${message.guild.id}`);
  let abonerol = await database.fetch(`abonerol.${message.guild.id}`);
  let abonekisi = message.guild.member(
    message.mentions.users.first() || message.guild.members.cache.get(args[0])
  );
  if (!abonerol)
    return message.channel.send(
      `Abone rolü ayarlanmamış ayarlamak için: __${prefix}abone-rol ayarla @rol__`
    );
  if (!abonelog)
    return message.channel.send(
      `Abone log kanalı ayarlanmamış ayarlamak için: __${prefix}abone-log ayarla #kanal__`
    );
  if (!aboneyetkilisi)
    return message.channel.send(
      `Yetkili rolü ayarlanmamış ayarlamak için: __${prefix}abone-yetkili ayarla @rol__`
    );
  let user = message.mentions.users.first();
  if (!message.member.roles.cache.has(aboneyetkilisi))
    return message.channel.send(
      `Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`
    );

  if (!message.mentions.users.first())
    return message.channel.send(`Abone yetkisini vereceğim üyeyi etiketle!`);

  await abonekisi.roles.add(abonerol);
  const embed = new Discord.MessageEmbed()
    .setTitle(`✅ Başarılı bir şekilde abone rolün verildi.`)
    .addField(
      `🎃 Abone Rolünü Veren Kişi:`,
      `<@${message.author.id}>`,
      true
    )
    .addField(
      `🔔 Abone Rolü Verilen Kişi:`,
      `${user}`,
      true
    )
   .addField(
     `🔎 Mesaj linki`,`[Tıkla](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`,
     true
   )
  .setColor("#52eb47")
  message.guild.channels.cache.get(abonelog).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Abone', 'a', 'A'],
  perm: 0
};
exports.help = {
  name: "abone"
};

exports.play = {
  kullanım: "abone-yetkili ayarla @rol",
  açıklama: "Abone verebilicek yetkiliyi ayarlarsınız.",
  kategori: "Abone"
};
