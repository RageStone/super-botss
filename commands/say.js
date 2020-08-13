module.exports.run = async(client, message, args, RichEmbed) => {
  const db = require("quick.db")
  message.delete()
  let p = await db.fetch(`prefix_${message.guild.id}`)
  var content = message.content.replace(p + 'say', '')
  message.channel.send(content)
}