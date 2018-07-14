var mongo = require('mongodb').MongoClient


var url = 'mongodb://localhost:27017'
mongo.connect(url, function(err, client) {
  if (err) throw err
    //as process.argv[2] is already a string, don't put apostrophes around it.
  var db = client.db(process.argv[2])
  db.collection(process.argv[3]).deleteOne({_id:process.argv[4]})
    client.close();
})