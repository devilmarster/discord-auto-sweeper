var self = module.exports = {
	name: 'white-v-channels',
	aliases: ['wvc'],
	description: 'Sets the voice channels the bot checks before sweeping the white channeled text channel or returns the voice channels currently white listed',
	usage: '[voice channel] ... [voice channel]',
	owner: true,
	execute(message, args) {
		if (args.length) {

			if (args[0] === '!') return message.client.settings.set(message.guild.id, [], "whiteVChannels");

			let rvc = [];
			let avc = [];
			let fvc = [];
			let wvc = message.client.settings.get(message.guild.id, "whiteVChannels");
			let fchk = false;
			for (let n = 0; n < args.length; n++) {
				let vc = message.client.channels.cache.filter(c => c.name === args[n] && c.type === 'voice');
				if (vc.array().length) {
					vc = vc.first().id;
					if (wvc.includes(vc)) {
						wvc.splice(wvc.indexOf(vc), 1);
						rvc.push(vc);
					} else {
						wvc.push(vc);
						avc.push(vc);
					}
				} else {
					fvc.push(args[n]);
					fchk = true;
				}
			}
			message.client.settings.set(message.guild.id, wvc, "whiteVChannels");			
			message.channel.send(`Voice channels added to white list: ${self.cnFormat(avc, message)}`);
			message.channel.send(`Voice channels removed from white list: ${self.cnFormat(rvc, message)}`);
			if (fchk) {
				if (fvc.length > 1) {
					message.channel.send(`${fvc} are not voice channels in this server`);
				} else {
					message.channel.send(`${fvc} is not a voice channel in this server`);					
				}
			}
		} else {
			message.channel.send(`White listed voice channels: ${self.cnFormat(message.client.settings.get(message.guild.id, "whiteVChannels"), message)}`);
		}
	},
	cnFormat(vcs, msg) {
		let cNames = '';
		for (let n = 0; n < vcs.length; n++) {
			let name = msg.client.channels.cache.get(vcs[n]).name;
			cNames += `\`${name}\``; 
			if (n !== vcs.length - 1) cNames += `, `;
			}
		return cNames;
	},
};