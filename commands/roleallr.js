module.exports = {
run: async (client, message, args) => {
      if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(":no_entry: You don't have permissions to use this command!:no_entry: ");
  if(!args[0] || !args[0].includes("<@&")) return message.reply("you have to mention a role to add to all guild members.");
  const roleid = args[0].replace("<@&","").replace(">", "");
  let role = message.guild.roles.get(roleid);
  message.guild.members.forEach(member => {
    member.removeRole(role)
    console.log()
  })
await message.channel.send(":white_check_mark:Successfuly removed " + args[0] + " to all guild members.:white_check_mark:")
}
}
