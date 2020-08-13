const db = require('quick.db')
module.exports.run = async(client, message, args, RichEmbed) => {
   if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(":no_entry: You don't have permissions to use this command!:no_entry: ");
  if(!args[0]) return message.channel.send('**You Must Enter A Role**')
  db.set(`staffRole_${message.guild.id}`, args[0].replace("<@&", "").replace(">", ""));
  let role = await db.fetch(`staffRole_${message.guild.id}`)
  message.channel.send(`The Staff Role Has Been Set To <@&${role}> In ` + message.guild.name)

     }