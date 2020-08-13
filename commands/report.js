module.exports.run = async(client, message, args, RichEmbed) => {
      var member= message.mentions.members.first();
  if(member === message.author) return message.channel.send('You Cant Report Yourself!')
  if(member === client.user.tag) return message.channel.send('You Cant Report The Bot!')
//  if(member.bot) return message.channel.send('You Cant Report A Bot!')
  if(!args[0]) return message.channel.send('Please Meantion Someone To Report!')
  if(!args[1]) return message.channel.send('Please Type A Reason!')
var reportCha = message.guild.channels.find(c => c.name === 'reports')
if(!reportCha) {
  let c = await message.guild.createChannel(
'reports', "text")
 c.overwritePermissions(message.guild.defaultRole, {
    SEND_MESSAGES: false,
    READ_MESSAGES: true
  });
  c.overwritePermissions(message.guild.roles.find(r => r.name === 'RageBot'), {
    ADMINISTRATOR: true
  });
}
  const db = require('quick.db')
  var p = db.fetch(`prefix_${message.guild.id}`)
  var reason = message.content.replace('-report', '').replace(args[0], '')
  const embed = new RichEmbed()
  .setTitle('Server: ' + message.guild.name)
  .setDescription('Reporter: ' + message.author + ' \n Reporting: '+ member + ' \nReason: `' + reason + '`')
  .setFooter('SuperBot✨')
  .setColor('#b70000')
  reportCha.send(embed)

}