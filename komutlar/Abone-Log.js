let database = require("quick.db");//Umut#9552
const ayarlar = require("../ayarlar.json");//Umut#9552
const prefix = ayarlar.token//Umut#9552
//Umut#9552
exports.run = async (client, message) => {

  let prexcode = await db.fetch(`prexgold${message.author.id}`)
  if(prexcode) {


} else { return message.channel.send(`${message.author}, Bu Komut Gold Üyeler İçindir. Sende Gold Üye Bulunmamakta.`) }

//Not - exports.run kısmının altına bunu atın!
  if (!message.member.hasPermission(`ADMINISTRATOR`))//Umut#9552
    return message.channel.send(//Umut#9552
      `Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`//Umut#9552
    );
//Umut#9552
  let log = message.mentions.channels.first();
  if (!log)//Umut#9552
    return message.channel.send(//Umut#9552
      `Abone log kanalı ayarlanmamış ayarlamak için: __${prefix}abone-log ayarla #kanal__`//Umut#9552
    );
//Umut#9552//Umut#9552
  database.set(`abonelog.${message.guild.id}`, log.id);//Umut#9552
  message.channel.send(
    `Abone kanalı __"${log}"__ olarak ayarlandı.`//Umut#9552
  );
};

exports.conf = {
  enabled: true,//Umut#9552
  guildOnly: false,//Umut#9552
  aliases: ["abone-log"],//Umut#9552
  perm: 0//Umut#9552
};//Umut#9552
exports.help = {
  name: "abonelog"
};//Umut#9552

exports.play = {
  kullanım: "abonelog #kanal",
  açıklama: "Abone log kanalını ayarlarsınız.",
  kategori: "Abone"
};
