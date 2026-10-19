module.exports = {
	name: 'test',
	description: 'Test',
	usage: '[anything]',
	dev: true,
	execute(message, args) {
		// console.log(message.client.whiteTChannel, message.channel.id);
		// for (let n = 0; n < 150; n++){
		// 	message.channel.send('-ping');
		// }
		// message.channel.messages.fetch()
		// 	.then(messages => {
		// 		console.log(messages.size);
		// 	});

		if(args.length) {
			message.channel.send('test response');
		}
		console.log('test response');
	},
};