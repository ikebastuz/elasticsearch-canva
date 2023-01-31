const { Elastic, Mongo } = require('../init');

/**
 * Delete "donation" records
 */
async function run() {
	await Promise.all([
		(async () => {
			await Mongo.initConnection();
			await Mongo.dropCollection('donations');
			Mongo.client.close();
		})(),
		await Elastic.deleteIndex('donations'),
	]);
}

run().catch(console.log);
