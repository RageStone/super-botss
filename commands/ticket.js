const usedCommandRecently = new Set()
module.exports.run = async(client, message, args, RichEmbed) => {
  if(usedCommandRecently.has(message.author.id)){
        message.reply('You Cannot Use That Command Just Yet! Wait another 30 seconds!');
      } else {
const db = require('quick.db')
  var p = db.fetch(`prefix_${message.guild.id}`)
var resion = message.content.replace(p + 'ticket', '') ? message.content.replace(p + 'ticket', '') : '`No Reasion Was Provided`'
var member = message.author
let role = await db.fetch(`staffRole_${message.guild.id}`)

 //message.guild.createChannel('new-channel', { type: 'text'});
let c = await message.guild.createChannel(
		message.author.username + '\`s Ticket ', "text")
 c.overwritePermissions(message.guild.defaultRole, {
    SEND_MESSAGES: false,
    READ_MESSAGES: false
  });
  c.overwritePermissions(message.member.id, {
    SEND_MESSAGES: true,
    READ_MESSAGES: true,
   MANAGE_MESSAGES: true,
    MENTION_EVERYONE: false,
  });
  c.overwritePermissions(message.guild.roles.find(r => r.name === 'Meldrop'), {
    ADMINISTRATOR: true
  });
const embed = new RichEmbed()
.setAuthor(message.author.tag, message.author.avatarURL)
.setTitle('Here is ' + member.username + '\`s Ticket:')
.setDescription('Reason: `' + resion + '`')
 await c.send(embed)
await c.send(`<@&${role}>`)
  .catch()
  await message.reply('Your Ticket Has Been Created In ' + c)
usedCommandRecently.add(message.author.id)
        setTimeout(() => {
           usedCommandRecently.delete(message.author.id)
     }, 30000)

}}