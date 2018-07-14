var mongo = require('mongodb').MongoClient


var url = 'mongodb://localhost:27017'
mongo.connect(url, function(err, client) {
  if (err) throw err
    //as process.argv[2] is already a string, don't put apostrophes around it.
  var db = client.db('learnyoumongo')
  db.collection('prices').aggregate([{$match:{"size":process.argv[2]}},{$group:{ _id:'average',avg:{ $avg:'$price'}}}]).toArray(function(err, result) {
      if (err) throw error;
      console.log(result[0].avg.toFixed(2));
  })
    client.close();
})