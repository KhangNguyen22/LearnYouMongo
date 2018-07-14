var mongo = require('mongodb').MongoClient


var url = 'mongodb://localhost:27017'
mongo.connect(url, function(err, client) {
  if (err) throw err
    //as process.argv[2] is already a string, don't put apostrophes around it.
  var db = client.db('learnyoumongo')
  db.collection('parrots').count({age: {$gt:+process.argv[2]}}, function(err, count) {
      if (err) throw error;
      console.log(count);
  })
    client.close();
})