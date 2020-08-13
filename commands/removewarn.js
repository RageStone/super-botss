const db = require('quick.db')
module.exports.run = async(client, message, args, RichEmbed) => {  
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":no_entry: You don't have permissions to use this command!:no_entry: "); 
  let member = message.mentions.users.first()
  db.add(`warns_${member.id}`, -1)
 var c = await db.fetch(`warns_${member.id}`)

  message.channel.send(`:white_check_mark: successfuly removed warn from ${member}:white_check_mark: \n now he has ${c} warns`)
}