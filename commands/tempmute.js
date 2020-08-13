const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const ms = require('ms')
const db = require('quick.db')
module.exports.run = async (bot, message, args) => {
 let LogChannel = db.fetch(`logChannel_${message.guild.id}`)
// check if the command caller has permission to use the command
 if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(":no_entry: You don't have permissions to use this command!:no_entry: ");
if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I don't have permission to add roles!")

//define the reason and mutee
let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!mutee) return message.channel.send("Please supply a user to be muted!");


var time = args[1]
//define mute role and if the mute role doesnt exist then create one
let muterole = message.guild.roles.find(r => r.name === "muted")
if(!muterole) {
    try{
        muterole = await message.guild.createRole({
            name: "Muted",
            color: "#514f48",
            permissions: []
        })
        message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
                SEND_TTS_MESSAGES: false,
                ATTACH_FILES: false,
                SPEAK: false
            })
        })
    } catch(e) {
        console.log(e.stack);
    }
}

//add role to the mentioned user and also send the user a dm explaing where and why they were muted
mutee.addRole(muterole.id).then(() => {
    message.delete()
   mutee.send(`Hello, you have been muted in ${message.guild.name} for ${time}`).catch(err => console.log(err))
    message.channel.send(`${mutee.user.username} was successfully muted for ${time}.`)
})
await message.guild.channels.get(LogChannel).send(`${message.author} just muted ${mutee.user.tag} for: \`\`${time}\`\` `)
setTimeout(() => {
    mutee.removeRole(muterole);
  message.guild.channels.get(LogChannel).send(`${mutee.user.tag} got unmuted after \`\`${time}\`\`\n he got muted by ${message.author} `)
  }, ms(time)); // time in ms
};
