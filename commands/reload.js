const ownerid = "471977485232242708"
const { inspect } = require("util")

module.exports = {
run: async (client, message, args) => {
    if(message.author.id == ownerid) {
  if(!args[0]) return 
    let commandName = args[0].toLowerCase()
    if(!client.music.commands.get(commandName)) return message.channel.send("Please provide a valid command!")
    try {
        delete require.cache[require.resolve(client.music.requires.get(commandName))] // usage !reload <name>
        client.music.commands.delete(commandName)
        //client.music.aliases.delete(commandName)
        const pull = require(client.music.requires.get(commandName))
        client.music.commands.set(commandName, pull)
    } catch(e) {
      console.log(e)
        return message.channel.send(`Could not reload: \`${commandName}\``)
    }

    message.channel.send(`The command \`${commandName}\` has been successfully reloaded!`)
    //  } else {
       // return message.reply(" you are not the bot owner!").then(msg => msg.delete(5000))
     // }
    }
}
}
