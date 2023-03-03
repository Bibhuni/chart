const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'assignment'
const client = new MongoClient(url);


async function dbConnect(){
    let result= await client.connect();
    db = result.db(database);
    console.log("Connected to MongoDB database");
    return db.collection('data');
}

module.exports = dbConnect;