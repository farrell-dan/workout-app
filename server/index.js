const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const {
	getRandomQuote,
  } = require("./handlers")

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const PORT = 8888;

const app = express();

app.use(cors());
app.use(morgan("tiny"))
app.use(express.json())

app.get("/api/random-quote", getRandomQuote)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));


// app.get("/api/test", (req, res) => {
// 	res.json({ message: " You hit the end point!" });
// });


// app.get("/api/testMongo", async (req, res) => {
// 	const client = new MongoClient(MONGO_URI);

// 	try {
// 		await client.connect();
// 		const result = await client
// 			.db("WorkoutApp")
// 			.collection("workouts")
// 			.insertOne({ date: "Decmeber 22" });

// 		res.json(result);
// 	} catch (err) {
// 		console.log(err);
// 		res.status(400).json({ message: "something went wrong" });
// 	} finally {
// 		await client.close();
// 	}
// });


