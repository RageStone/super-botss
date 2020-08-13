module.exports.run = async(client, message, args, RichEmbed) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":no_entry: You don't have permissions to use this command!:no_entry: "); 
    if(!message.channel.name.endsWith("ticket")) return;
    var member= message.mentions.members.first();
  var c = message.channel

  c.overwritePermissions(member, {
    SEND_MESSAGES: true,
    READ_MESSAGES: true,
   MANAGE_MESSAGES: true,
    MENTION_EVERYONE: false,
  });
  var channel = message.channel.name.replace('s-ticket', '')
    await message.channel.send('`'+member.user.tag + '` has seccesfuly joined to  ' + channel +'\`s ticket')
}