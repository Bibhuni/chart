const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 5000;

// Connection URL and database name
const url = 'mongodb://localhost:27017';
const dbName = 'assignment';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Connect to the MongoDB server
client.connect(function(err) {
  if (err) throw err;

  console.log("Connected to MongoDB server");

  const db = client.db(dbName);
  const collection = db.collection('data');

  // Define a route to retrieve data from the collection
  app.get('/data', function(req, res) {
    // Query the collection and retrieve the data
    collection.find().toArray(function(err, data) {
      if (err) throw err;

      // Return the data as a JSON response
      res.json(data);
    });
  });

  // Start the server
  app.listen(port, function() {
    console.log(`Server started on port ${port}`);
  });
});
