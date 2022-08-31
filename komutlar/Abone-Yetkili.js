let database = require("quick.db");//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552
const ayarlar = require("../ayarlar.json");//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552
const prefix = ayarlar.token//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552

exports.run = async (client, message) => {//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552

  let prexcode = await db.fetch(`prexgold${message.author.id}`)
  if(prexcode) {


} else { return message.channel.send(`${message.author}, Bu Komut Gold Üyeler İçindir. Sende Gold Üye Bulunmamakta.`) }

  if (!message.member.hasPermission(`ADMINISTRATOR`))//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552
    return message.channel.send(//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552
      `Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552
    );

  let rol = message.mentions.roles.first();//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552
  if (!rol)
    return message.channel.send(//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552
      `Yetkili rolü ayarlanmamış ayarlamak için: __${prefix}abone-yetkili ayarla @rol__`//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552
    );

  database.set(`aboneyetkilisi.${message.guild.id}`, rol.id);//Umut#9552//Umut#9552//Umut#9552//Umut#9552
  message.channel.send(//Umut#9552//Umut#9552//Umut#9552//Umut#9552//Umut#9552
    `Abone yetkilisi "${rol}" olarak ayarlandı.`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["abone-yetkili"],
  perm: 0
};
exports.help = {
  name: "abone-yetkili"
};

exports.play = {
  kullanım: "abone-yetkili ayarla @rol",
  açıklama: "Abone yetkili rolunü ayarlarsınız.",
  kategori: "Abone"
};
