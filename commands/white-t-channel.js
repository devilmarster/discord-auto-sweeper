module.exports = {
	name: 'white-t-channel',
	aliases: ['wtc'],
	description: 'Sets the text channel the bot is allowed to receive commands from',
	owner: true,
	execute(message, args) {
		if (message.client.settings.get(message.guild.id, "whiteTChannel") === message.channel.id) {
			message.client.settings.set(message.guild.id, '', "whiteTChannel");
			message.channel.send(`Successfully black channeled text channel \`${message.channel.name}\``);
		} else {
			message.client.settings.set(message.guild.id, message.channel.id, "whiteTChannel");
			message.channel.send(`Successfully white channeled text channel \`${message.channel.name}\``);
		}
	},
};