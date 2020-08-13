const db = require('quick.db')
module.exports.run = async(client, message, args, RichEmbed) => {  
if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(":no_entry: You don't have permissions to use this command!:no_entry: ");
  let member = message.mentions.users.first() 
  var c = await db.fetch(`warns_${message.guild.id}_${member.id}`) ? await db.fetch(`warns_${message.guild.id}_${member.id}`) : '0'
  // if(c = '1') c = '0'
  await message.channel.send(`${member} has ${c} warns`)
}