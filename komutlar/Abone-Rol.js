let database = require("quick.db");
const ayarlar = require("../ayarlar.json");
const prefix = ayarlar.token//Umut#9552
//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552
exports.run = async (client, message) => {//Umut#9552

  let prexcode = await db.fetch(`prexgold${message.author.id}`)
  if(prexcode) {


} else { return message.channel.send(`${message.author}, Bu Komut Gold Üyeler İçindir. Sende Gold Üye Bulunmamakta.`) }

  if (!message.member.hasPermission(`ADMINISTRATOR`))//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552
    return message.channel.send(//Umut#9552
      `Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552
    );
//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552
  let rol = message.mentions.roles.first();//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552
  if (!rol)//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552
    return message.channel.send(//Umut#9552
      `Abone rolü ayarlanmamış ayarlamak için: __${prefix}abone-rol ayarla @rol__`//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552
    );

  database.set(`abonerol.${message.guild.id}`, rol.id);
  message.channel.send(
    `Abone rolü başarılı bir şekilde "${rol}" olarak ayarlandı.`//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["abone-rol"],
  perm: 0
};
exports.help = {
  name: "abone-rol"
};

exports.play = {
  kullanım: "abone-rol @rol",
  açıklama: "Abone rolünü ayarlarsınız.",
  kategori: "Abone"
};
