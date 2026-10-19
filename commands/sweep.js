module.exports = {
	name: 'sweep',
	description: 'Clears text channel indiscriminately',
	async execute(message, args) {
		let deleted;
		do {
			// if (!args.length && message.content !== '--sweep') {
			// 	deleted = await 
			// } else {
			// }
			deleted = await message.channel.bulkDelete(100);
		} while (deleted.size != 0);
	},
};