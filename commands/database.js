module.exports = {
	name: 'database',
	aliases: ['db'],
	description: 'Show saved settings of server from database',
	dev: true,
	execute(message, args) {
		console.log(message.client.settings);
	},
};