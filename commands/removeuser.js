module.exports.run = async(client, message, args, RichEmbed) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":no_entry: You don't have permissions to use this command!:no_entry: "); 
    if(!message.channel.name.endsWith("ticket")) return;
    var member= message.mentions.members.first();
  var c = message.channel
  c.overwritePermissions(member, {
    READ_MESSAGES: false,
  });
  await message.channel.send(member.tag + ' has seccesfuly removed from ' + message.channel.name + '\`s ticket')
}