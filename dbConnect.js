require('dotenv').config()

// MongoDb connection
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://Yaru:Newworld1223@cluster1.ehpmsoe.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, { useNewUrlParser: true })

client.connect((err, db) => {
          if (!err) {
                    console.log("MonogoDB Connected")
          }
          else {
                    console.log("DB Error: ", err);
                    process.exit(1);
          }
})

exports.mongoClient = client;
