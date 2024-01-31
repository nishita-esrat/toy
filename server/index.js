require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 800;
const uri = process.env.DB_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // database collection
    const database = client.db("toyDB");
    const collection_of_toy = database.collection("toys");
    // for checking route
    app.get("/health", (req, res) => {
      res.send("hello");
    });
    // creating new toy
    app.post("/addToy", async (req, res) => {
      const toy = req.body;
      const result = await collection_of_toy.insertOne(toy);
      console.log(result);
      res.send(result);
    });
    // get route based on the toyName,subCategory,sellerEmail,page,limit,orderAscOrDes
    app.get("/toys", async (req, res) => {
      // receive info
      const { toyName, subCategory, sellerEmail, page, limit, orderAscOrDes } =
        req.query;
        console.log(req.query)
      // for odering ascending or decending based on price
      const oderBasedOnPrice = orderAscOrDes == "ascending" ? 1 : -1;
      console.log(oderBasedOnPrice)
      let option = {};
      // for limit and skip toy item
      const limitToy = parseInt(limit) || (await collection_of_toy.countDocuments({}));
      const skipToy = parseInt(limit) * ((parseInt(page) || 1) - 1);
      // for checking which type of toy data , we want
      let filter = {};
      if (toyName) {
        filter = { toy_name: toyName };
      } else if (subCategory) {
        filter = { sub_category: subCategory };
      } else if (sellerEmail) {
        filter = { seller_email: sellerEmail };
      } else {
        filter = {};
      }
      if (orderAscOrDes) {
        option = {
          sort: {
            price: oderBasedOnPrice,
          },
        };
      }

      const result = await collection_of_toy
        .find(filter, option)
        .skip(skipToy)
        .limit(limitToy)
        .toArray();
      res.send(result);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run();
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
