module.exports = {
run: async (client, message, args) => {
      if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(":no_entry: You don't have permissions to use this command!:no_entry: ");
  if(!message.guild.me.hasPermission('MANAGE_ROLES')) return message.channel.send('error')
  if(!args[0] || !args[0].includes("<@&")) return message.reply("you have to mention a role to add to all guild members.")
  if(err) return message.reply('The Bot Role Must Be Higher Then <@&' + role + '>' )
  var err = console.error(err)
  const roleid = args[0].replace("<@&","").replace(">", "");
  let role = message.guild.roles.get(roleid);
  message.guild.members.forEach(member => {
    member.addRole(role)
    console.log()
  })
await message.channel.send(":white_check_mark:Successfuly given " + args[0] + " to all guild members.:white_check_mark:")
}
}
