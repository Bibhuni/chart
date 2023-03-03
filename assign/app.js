const express =  require('express');
const dbConnect = require('./mongodb');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/data',async (req,resp) =>{
    let data = await dbConnect();
    let datta = await data.find().toArray();
    resp.json(datta);
    //resp.send(JSON.stringify(data));
});

app.listen(5000);/*
const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 5000;
const url = 'mongodb://localhost:27017/school';

MongoClient.connect(url, function(err, client) {
  if (err) throw err;
  console.log("Connected to MongoDB database");
  const db = client.db('school');

  app.get('/data', function(req, res) {
    const collection = db.collection('students');
    collection.find({}).toArray(function(err, docs) {
      if (err) throw err;
      res.json(docs);
    });
  });

  app.listen(port, function() {
    console.log(`App listening on port ${port}`);
  });
});


/*const express = require('express');
const app = express();
const studentRoute = require('./api/route/student');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/school');

mongoose.connection.on('error',err=>{
    console.log('connection failed');
});
mongoose.connection.on('connected',connected=>{
    console.log('connected with database....');
});

app.use('/student',studentRoute);

app.use((req,res,next)=>{
    res.status(404).json({
        message:'bad request'
    })
})

module.exports = app;*/
