const db = require("quick.db")
module.exports.run = async (client, message, args) => {
//  if(!message.member.hasPermission("ADMINISTRAOR")) return message.channel.send(":no_entry: You don't have permissions to use this command!:no_entry: ");
  if(!args[0]) return message.channel.send('Please Type a Prefix')
  db.set(`prefix_${message.guild.id}`, args[0])
  message.channel.send(":white_check_mark:**The New Prefix Has Been Set To **``" + args[0] + "``:white_check_mark:")
}