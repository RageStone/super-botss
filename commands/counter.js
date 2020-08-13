module.exports.run = async(client, message, args, RichEmbed) => {
  const db = require('quick.db')

  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":no_entry:You don't have permissions to use this command!:no_entry:")
  const e = new RichEmbed()
  .setTitle('**Please type a property!**')
  .setDescription('**Properteis**:\n **__setup__** - Setups Members Counter and User Counter\n__Members__ - All Server Members With All The Bots\n__Users__ - All The Humen Members In Your Server!')
//  if(!args[0]) return message.channel.send(e)
  if(args[0] === 'members'){
    var countchannel = db.fetch(`countchannel_${message.guild.id}`)
    if(message.guild.channels.get(countchannel)) return message.channel.send('**:x:You Alreay Have Member Stats On Your Server!:x:**')
let c22 = await message.guild.createChannel(
		`Members: ${message.guild.members.size}`,
		"voice")
 c22.overwritePermissions(message.guild.defaultRole, {
    CONNECT:false,
    READ_MESSAGES: true
  });
  c22.overwritePermissions(message.member.id, {
    SEND_MESSAGES: true,
    READ_MESSAGES: true,
   MANAGE_MESSAGES: true,
    MENTION_EVERYONE: false,
  });
		/*[
			{	//make creator of channel owner (aka gib perms)
				type: "member",
				id: message.member.id,
				allow: 17825808
			},
			{	//hide for everyone temporarily so the channel list doesn't fucking earthquake like a diabetic after downing 3 monsters - this is a permament temporary workaround until D.JS v12 gets released
				type: "role",
				id: message.guild.defaultRole,
				allow: 1024
			}
		],*/
		(`Created by ${message.member.displayName} via /create command`)
	.then(c => db.set(`countchannel_${message.guild.id}`, c.id))

  message.channel.send(':white_check_mark:Successfully Created Member Stats In Your Server:white_check_mark:')
  }
  if(args[0] === 'users'){
    var countchannel1 = db.fetch(`countchannelNoBots_${message.guild.id}`)
    if(message.guild.channels.get(countchannel1)) return message.channel.send('**:x:You Alreay Have User Stats On Your Server!:x:**')
  let c33= await  message.guild.createChannel(
		`Users: ${message.guild.members.filter(member => !member.user.bot).size}`,
		"voice")
   c33.overwritePermissions(message.guild.defaultRole, {
    CONNECT:false,
    READ_MESSAGES: true
  });
  c33.overwritePermissions(message.member.id, {
    SEND_MESSAGES: true,
    READ_MESSAGES: true,
   MANAGE_MESSAGES: true,
    MENTION_EVERYONE: false,
  });
		/*[
			{	//make creator of channel owner (aka gib perms)
				type: "member",
				id: message.member.id,
				allow: 17825808
			},
			{	//hide for everyone temporarily so the channel list doesn't fucking earthquake like a diabetic after downing 3 monsters - this is a permament temporary workaround until D.JS v12 gets released
				type: "role",
				id: message.guild.defaultRole,
				allow: 1024
			}
		],*/
		(`Created by ${message.member.displayName} via /create command`)
	.then(c => db.set(`countchannelNoBots_${message.guild.id}`, c.id))
  message.channel.send(':white_check_mark:Successfully Created User Stats In Your Server:white_check_mark:')
  }
  if(args[0] === 'bots'){
    var countchannel2 = db.fetch(`countchannelbots_${message.guild.id}`)
    if(message.guild.channels.get(countchannel2)) return message.channel.send('**:x:You Alreay Have Bots Stats On Your Server!:x:**')
let c12 = await message.guild.createChannel(`Bots: ${message.guild.members.filter(member => member.user.bot).size}`,"voice")
 c12.overwritePermissions(message.guild.defaultRole, {
    CONNECT:false,
    READ_MESSAGES: true
  });
  c12.overwritePermissions(message.member.id, {
    SEND_MESSAGES: true,
    READ_MESSAGES: true,
   MANAGE_MESSAGES: true,
    MENTION_EVERYONE: false,
  });
		/*[
			{	//make creator of channel owner (aka gib perms)
				type: "member",
				id: message.member.id,
				allow: 17825808
			},
			{	//hide for everyone temporarily so the channel list doesn't fucking earthquake like a diabetic after downing 3 monsters - this is a permament temporary workaround until D.JS v12 gets released
				type: "role",
				id: message.guild.defaultRole,
				allow: 1024
			}
		],*/
		(`Created by ${message.member.displayName} via /create command`)
	
.then(c => db.set(`countchannelbots_${message.guild.id}`, c.id))

await  message.channel.send(':white_check_mark:Successfully Created Bots Stats In Your Server:white_check_mark:')
  }
  
    if(args[0] === 'update'){

       message.guild.channels.get(countchannel).setName(`Members: ${message.guild.members.size}`)
      client.channels.get(countchannel1).setName(`Users: ${message.guild.members.filter(member => !member.user.bot).size}`)
      client.channels.get(countchannel2).setName(`Bots: ${message.guild.members.filter(member => member.user.bot).size}`)
      await message.channel.send(':white_check_mark:Successfully Updated All The Counters In Your Server:white_check_mark:')
    }
  
  
}