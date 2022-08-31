const db = require("croxydb")

module.exports.run = async(client, message, args) => {

 let komutlar = await db.fetch(`ozelkomuts?`)
 if(!komutlar) {
   return message.channel.send(`Zaten hiç özel komut ayarlanmamış.`)
 }
 let id = args[0]
 if(!id || isNaN(id)) {
   return message.channel.send(`Bir id girmelisiniz. Var olan özel komutlara bakmak için \`!komutlar\` yazmanız yeterli.`)
 }
 let c = komutlar.filter(e => {return e.id !== `${id}`}).map(b => b)
 await db.set(`ozelkomuts?`, c)
 await db.delete(`ozelkomut?${id}`)
 return message.channel.send(`${id} idli ozel komut silindi.`)
}
module.exports.conf = {
aliases: []
}

module.exports.help = {
name: 'komut-sil'
}
