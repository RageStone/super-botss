const usedCommandRecently = new Set()
module.exports.run = async(client, message, args, RichEmbed) => {
  if(usedCommandRecently.has(message.author.id)){
        message.reply('You Cannot Use That Command Just Yet! Wait another 30 seconds!');
      } else {
  const db = require('quick.db')
  let role = await db.fetch(`staffRole_${message.guild.id}`)
  const member = message.member
  if(!args[0]) return message.channel.send(member + " **Please Enter A Reason\n Exemple: ``helpme earrape.``**")
  if(!role) return message.channel.send('You Must Set A Staff Role First!')
console.log(message.member.voiceChannel)
   var prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : '-'
  const a = "``" + message.content.replace(prefix + "helpme ", "") + "``"
  var c = member.voiceChannel ? member.voiceChannel : "<#" +  message.channel.id + ">"
message.channel.send(`(<@&${role}>)\n` + message.author + " needs your help!\n Room » " + c + "\n Reason » " + a)
usedCommandRecently.add(message.author.id)
          setTimeout(() => {
            usedCommandRecently.delete(message.author.id)
          }, 30000)


      }


}