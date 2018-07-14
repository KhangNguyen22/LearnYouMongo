var mongo = require('mongodb').MongoClient


var url = 'mongodb://localhost:27017'

mongo.connect(url, function(err, client) {
  if (err) throw err
  var db = client.db('learnyoumongo')
    db.collection('parrots').find({
    age: {
      $gt: +process.argv[2]
    }
  }).toArray(function(err, result) {
    if (err) throw err
    console.log(result)
    db.close()
  })
})
//toArray() returns an array.