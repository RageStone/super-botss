/*module.exports.run = async(client, message, args, RichEmbed) => {
//send command
  let msg = await(message.channel.send)
  var guilds = "";
  message.delete()
client.channels.forEach(channel => {
  if(channel.name === args[0]) return channel.send, guilds += channel.guild.name + "\n";
  if(!channel.name === args[0]) return;
})
  const Embed = new RichEmbed()
  .setTitle('Done! ')
  .setDescription('Ive sent ' + "" + message.content.replace("-send ", "", args[0], "") + "" + ' in ' + "" + guilds + "")
  
  .setFooter("MADE BY LARS#9237\n Requested By " + message.author.tag, message.author.avatarURL)
  message.channel.send(Embed)
  .then(Embed => {
  setTimeout(() => {
  Embed.delete()
}, 10000)});

 
  }*/


