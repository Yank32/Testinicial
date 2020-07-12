const Discord = require("discord.js")
const botconfig = require("../config.json");
const prefix = require("../config.json");


module.exports.run = async (client, message, args) => {

    if(args[0] == "help") return message.channel.send(`coloque ${prefix}help.`)

    if(args[0]) {
        let command = args[0];
        if(client.commands.has(command)) {
            command = client.commands.cache.get(command);
            var SHembed = new Discord.MessageEmbed()
            .setColor("cyan")
            .setAuthor(`AetherMC`, message.guild.iconURL)
            .setThumbnail(client.user.displayAvatarURL)
            .setDescription(`The bot prefix is: ${prefix}\n\n**Command:** ${command.config.name}\n**Description:** ${command.config.description || "No Description"}\n**Usage:** ${command.config.usage || "No Usage"}\n**Accessable by:** ${command.config.accessableby || "Members"}\n**Aliases:** ${command.config.noalias || command.config.aliases}`)
            message.channel.send(SHembed);
        }}

    if(!args[0]) {
       message.delete();
        let embed = new Discord.MessageEmbed()
        .setAuthor(`🌠Comandos AetherMC🌠!`, message.guild.iconURL)
        .setColor("redlight")
        .setImage("https://i.imgur.com/uNW0Sut.png")
        .setDescription(`${message.author.username} ***Mandei no seu privado*** !`)

        let Sembed = new Discord.MessageEmbed()
        .setImage("https://i.imgur.com/uNW0Sut.png")
        .setColor("cyan")
        .setAuthor(`AetherMC`, message.guild.iconURL)
        .setThumbnail(client.user.displayAvatarURL)
        .setTimestamp()
        .setDescription(`***Esses são meus comandos atuais!***\n**Meu prefix é: a!**`)
        .addField(`Comando.1:`, "``a!Avatar <@usuario> (Para ver a foto de alguem)``")
        .addField(`Comando.2:`, "``a!Info (Para ver as informações do servidor)``")
        .addField(`Comando.3:`, "``a!Jokempo (Jokempo com o Bot)``")
        .addField(`Comando.4:`, "``a!Moeda (Cara ou coroa com o Bot)``")
        .addField(`Comando.5:`, "``a!Ping (Para ver o ping do bot)``")
        .addField(`Comando.6:`, "``a!Uptime (Para ver o tempo on do bot)``")
        .addField(`Comando.7:`, "``a!User (Para ver suas informações)``")
        .addField(`Comando.8:`, "``a!Roleta (Roleta Russa kkk)``")
        .addField(`Comando.9:`, "``a!Socar <@usuario> (Dar uma porrada em alguem)``")
        .addField(`Comando.10:`, "``a!Palmas <@usuario> (Bater balmas para alguem)``")
        .addField(`Comando.11:`, "``a!Pergunta <Sua pergunta> (Para fazer uma pergunta com resposta aleatoria do bot) ``")
        .addField(`Comando.12:`, "``a!Kiss <@usuario> (Para beijar alguem)``")
        .addField(`Comando.13:`, "``a!Casar <@usuario> (Para se casar com alguem)``")
        .addField(`Comando.14:`, "``a!Divorcio <@usuario> (Para se divorciar de alguem)``")
        .addField(`Comando.15:`, "``a!Reportar (Para reportar alguem)``")
        .setFooter("AetherMC", client.user.displayAvatarURL)
        message.channel.send(embed).then(m => m.delete(10000));
        message.author.send(Sembed)
    }
}


module.exports.config = {
    name: "help",
    aliases: ["h", "halp", "commands"],
    usage: "!usage",
    description: "",
    accessableby: "Members"
}
