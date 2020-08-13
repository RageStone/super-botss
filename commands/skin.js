module.exports.run = async(client, message, args, RichEmbed) => {  
//skin command
  if (!args[0]) return message.channel.send('**Please type a vaild Minecraft user**')
  const Embed = new RichEmbed()
  .setTitle('here is the skin of ' + args[0])
  .setImage('https://minotar.net/body/' + args[0] + '/100.png')
  .setTimestamp()
  .setColor('RANDOM')
  .setFooter('SuperBot✨\n Requested By ' + message.author.tag, message.author.avatarURL)
  message.channel.send(Embed)
}
