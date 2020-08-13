const Discord = module.require('discord.js');
const moment = require('moment');

module.exports.run = async(client, message, args, RichEmbed) => {  

    let user = message.mentions.users.first() || message.author;
    const joinDiscord = moment(user.createdAt).format('llll');
    const joinServer = moment(user.joinedAt).format('llll');
  const member = message.mentions.members.first() || message.member;
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(member.avatarURL)
    .addField(`${user.tag}`, `${user}`, true)
    .addField("ID:", `${user.id}`, true)
    .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
    .addField("Status:", `${user.presence.status}`, true)
//   .addField('Guilds:', `${member.guilds.size}`, true)
    .addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
    .addField("Bot:", `${user.bot}`, true)
    .addField("Joined The Server On:", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY")}`, true)
    .addField("Account Created On:", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
    .addField("Roles:", member.roles.map(roles => `${roles}`).join(', '), true)
    .setTimestamp()
    .setFooter("SuperBot✨n Requested By " + message.author.tag)
message.channel.send({embed});
    return;
}