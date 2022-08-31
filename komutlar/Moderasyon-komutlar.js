const { MessageEmbed } = require('discord.js')
const db = require("croxydb")

module.exports.run = async(client, message, args) => {



   let komutlar = await db.fetch(`ozelkomuts?`)
    let data = []
    let s = komutlar.map(e => {
      return data.push(`\`ID: ${e.id}\` - Komut: \`${e.komut}\` - Cevap: \`${e.cevap}\``)
    })
    message.channel.send(new MessageEmbed()
    .setColor('GOLD')
    .setAuthor(client.user.username, client.user.avatarURL())
    .setDescription(`Aşağıda oluşturulmuş özel komutların listesi verilmiştir;
    
    ${data.join('\n')}`)
    )
}
module.exports.conf = {
aliases: []
}

module.exports.help = {
name: 'komutlar'
} 