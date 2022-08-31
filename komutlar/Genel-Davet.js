const { MessageEmbed } = require("discord.js");
const { MessageButton } = require("discord-buttons");

exports.run = async (client, message, args) => {
    const embed = new MessageEmbed()
        .setDescription(`**Botu davet etmek istiyorsan aşığıdaki botuna tıklayabilir ve botu sunucuna davet edebilirsin iyi kullanımlar.**`)
        .setColor("RED")

    const btn = new MessageButton()
        .setStyle("url")
        .setLabel("Invite")
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)

    await message.channel.send({
        buttons: btn,
        embed: embed
    })
}
exports.conf = {
    aliases: ["invite"]
}

exports.help = {
    name: "davet"
}