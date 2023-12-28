const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const getRandomQuote =  async (req, res) => {
    const client = new MongoClient(MONGO_URI);

  try {
     await client.connect();
     const db = client.db("WorkoutApp")
     const collection = db.collection("Quotes");

    const count = await collection.countDocuments();
    const randomIndex = Math.floor(Math.random() * count);
    const randomQuoteDocument = await collection.findOne({}, {skip: randomIndex});

    const motivationArray = randomQuoteDocument?.motivation || [];

    const randomQuote = motivationArray[Math.floor(Math.random() * motivationArray.length)];

    res.json({ quote: randomQuote });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }finally {
    await client.close();
  }
};

module.exports = getRandomQuote;