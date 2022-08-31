const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**Yetersiz yetki! gereken => mesajları sil**")

  const sayi = args[0]

  if (!sayi) {
    return message.reply("En Az `1 - 100` Arasında Bir Tam Sayı Değeri Girmelisiniz.")
  }

  if (sayi > 101) return message.reply("En Az `1 - 100` Arasında Bir Tam Sayı Değeri Girmelisiniz.")


  let messages = await message.channel.messages.fetch({
    limit: sayi
  });

 await message.channel.bulkDelete(messages, true);
  
    message.reply(`${sayi} Adet Mesaj Başarı İle Uzaya Fırlatıldı. :rocket:`).then(mr => mr.delete({timeout: 5000}))
  
};

exports.conf = {
  aliases: ["sil"]
};

exports.help = {
  name: 'temizle'
};