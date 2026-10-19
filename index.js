const fs = require('fs')
const Discord = require('discord.js');
const { prefix, token, devid } = require('./config.json');
const Enmap = require('enmap');

const client = new Discord.Client({ partials: ['MESSAGE'] });
client.commands = new Discord.Collection();

client.settings = new Enmap({
	name: "settings",
	fetchAll: false,
	autoFetch: true,
	cloneLevel: 'deep'
});

const defaultSettings = {
	whiteVChannels: [],
	whiteTChannel: '',
};

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	
	const wtc = client.settings.get(message.guild.id, "whiteTChannel");
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));;

	if (!command || (command.dev && message.author.id !== devid)) return;
	if (command.owner && message.author.id !== message.guild.ownerID) return message.channel.send(`You must be the owner of this server to use that command`);
	if (wtc === '' && command.name !== 'white-t-channel') return message.channel.send(`You need to set which channel this bot is allowed in using the \`${client.commands.get('white-t-channel').name}\` command`);
	if (message.channel.id !== wtc && wtc !== '') return message.channel.send(`\`${client.channels.cache.get(wtc).name}\` is the white channel not this one`);

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command');
	}
});

client.on('voiceStateUpdate', (oldState, newState) => {
	const wvc = client.settings.get(oldState.guild.id, "whiteVChannels");
	const wtc = client.settings.get(oldState.guild.id, "whiteTChannel");

	if (wtc !== '' && wvc.length !== 0) {
		// const message = new Discord.Message(client, new Object(), client.channels.fetch(client.whiteTChannel));
		const channels = newState.guild.channels.cache.filter(c => wvc.includes(c.id));
		let amtTalk = 0;

		for (const [channelID, channel] of channels) {
			amtTalk += channel.members.size;
		}

		if (!amtTalk && wvc.includes(oldState.channelID) && !wvc.includes(newState.channelID)) {
			oldState.guild.channels.cache.get(wtc).send('Sweeping...')
			.then(msg => client.commands.get('sweep').execute(msg, []));
		}	
	
	}
});

client.on('channelDelete', channel => {
	let wvc = client.settings.get(channel.guild.id, "whiteVChannels");

	if (wvc.includes(channel.id)) {
		wvc.splice(wvc.indexOf(channel.id), 1);
		client.settings.set(channel.guild.id, wvc, "whiteVChannels");
	}
});

client.on('guildCreate', guild => {
	client.settings.ensure(guild.id, defaultSettings);
});

client.on('guildDelete', guild => {
	client.settings.delete(guild.id);
});

client.login(token);
