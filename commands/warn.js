const db = require('quick.db')
module.exports.run = async(client, message, args, RichEmbed) => {  
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(":no_entry: You don't have permissions to use this command!:no_entry: ");
  let member = message.mentions.users.first() 
  db.add(`warns_${message.guild.id}_${member.id}`, 1)
 var c = await db.fetch(`warns_${message.guild.id}_${member.id}`)

  message.channel.send(`:white_check_mark: ${member} has successfuly warned!:white_check_mark: \n he has ${c} warns`)
}