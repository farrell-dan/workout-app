const quotes = require("./data/quotes.json");

const { MongoClient } = require("mongodb");

require("dotenv").config();

const { MONGO_URI } = process.env;

const client = new MongoClient(MONGO_URI);

console.log("MONGO_URI:", MONGO_URI);

const exportDataToMongoDb = async (data, collectionName, dbName) => {
	try {
		await client.connect();

		const db = client.db(dbName);
		console.log("connected!");

		const result = await db.collection(collectionName).insertMany(data);
	} catch (error) {
		console.error(error.stack);
	} finally {
		await client.close();
		console.log("disconnected!");
	}
};

exportDataToMongoDb(quotes, "Quotes", "WorkoutApp");
