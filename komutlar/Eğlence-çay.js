const Discord = require('discord.js')

    exports.run = (client, message, args) => {
        let kullanıcı = message.mentions.members.first();

        if(!kullanıcı) return message.channel.send(`${message.author} - Rize Çayı Ismarlayacağın Kullanıcıyı Etiketle <:reizeay:940288149949644810>`)

        if(kullanıcı){
            const kahve = new Discord.MessageEmbed()
            .setDescription(`${message.author}, ${kullanıcı} **Kişisine Rize Çayı ısmarladı <:reizeay:940288149949644810>**`)
            .setColor('RANDOM')
            .setImage('https://cdn.discordapp.com/attachments/780396833675411516/940287382496886784/RizeCay.jpg')
            .setFooter('Afiyet olsun :)');
            message.channel.send(kahve)
        }
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['çay-ısmarla','çayısmarla', 'Çay'],
    permLevel: 0
}

exports.help = {
    name: 'çay'
}