module.exports.run = async (client, message, args) => {
  const db = require('quick.db')
let channel = message.mentions.channels.first() || message.guild.channels.get(args[0]) || message.guild.channels.find(a => a.name.toLowerCase() === args.join(" ").toLowerCase());
if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(":no_entry: You don't have permissions to use this command!:no_entry: ");
if(!args[0]) return message.channel.send('**You Must Type A Message!**')
if(!channel) return message.channel.send(":x:Invalid channel:x:.")
  let LogChannel = db.set(`logChannel_${message.guild.id}`, channel.id)
  message.channel.send(':white_check_mark:The Log Channel Has Been Set To <#' + LogChannel + '>:white_check_mark:')

}