module.exports.run = async(client, message, args, RichEmbed) => { 
var s = "";
  const Embed = new RichEmbed();
client.guilds.forEach(g => {
  s += g.name + "\n"
  message.author.send('**'+g.name+'**\n`'+ g.members.size + "` Members")
})
  await message.author.send(`\`\`${client.guilds.size}\`\` guilds and \`\`${client.users.size}\`\` users!`)
  Embed.setColor("RANDOM")
  //message.channel.send(Embed)
}