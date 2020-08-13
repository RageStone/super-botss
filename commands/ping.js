module.exports.run = async(client, message, args, RichEmbed) => {
//ping command
  
    message.channel.send("Pinging...").then(m => {
        let ping = m.createdTimestamp - message.createdTimestamp
        let choices = ["Is this really my ping", "Is it okay? I cant look", "I hope it isnt bad"]
        let response = choices[Math.floor(Math.random() * choices.length)]

    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} seconds, `
    }

   // message.channel.send(`I have been online for: ${duration(client.uptime)}`)

const embed = new RichEmbed()
.setAuthor('‏‏‎ ‎', client.user.avatarURL)
.setTitle('**Pong!**')
.addField('Bot Latency:', `${ping}`, true)
.addField('API Latency:', `${Math.round(client.ping)}`, true)
.addField('UpTime:', `${duration(client.uptime)}`)
        m.edit(embed)
    }
    )

}
		
    