module.exports.run = async (bot, message, args, RichEmbed) => {
 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":no_entry: You don't have permissions to use this command!:no_entry: "); 
    if(!message.channel.name.endsWith("ticket")) return;
  if(!args[0]) message.channel.delete()
}