const db = require("croxydb");
const { MessageEmbed } = require('discord.js')

module.exports.run = async(client, message, args) => {


      let ss = db.fetch(`ozelkomuts?`)
    let s = ss ? ss.length : 0
    if(!args[0]) return message.channel.send(`Özel komutun tetikleneceği mesajı yazmalısınız.`)
    if(!args.slice(1).join(' ')) return message.channel.send(`Özel komut için verilecek cevabı yazmalısınız.`)
    db.set(`ozelkomut?${s+1}`, {
      id: `${s + 1}`,
    komut: args[0],
      cevap: args.slice(1).join(' ')
    })
    db.push(`ozelkomuts?`, {
   id: `${s + 1}`,
   komut: args[0],
   cevap: args.slice(1).join(' ')
    })
    message.channel.send(new MessageEmbed()
    .setDescription(`Artık ${args[0]} mesajına \`${args.slice(1).join(' ')}\` cevabı verilecek.`)
    .setColor('GOLD')
    .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
    )
} 
module.exports.conf = {
aliases: []
}

module.exports.help = {
name: 'komut-ekle'
}