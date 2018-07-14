var mongo = require('mongodb').MongoClient


var url = 'mongodb://localhost:27017'

mongo.connect(url, function(err, client) {
  if (err) throw err
  var db = client.db('learnyoumongo')
    db.collection('parrots').find({age: {
      $gt: +process.argv[2]
    }}).project({_id:0,name:1,age:1}).toArray(function(err, documents) {
    if (err) throw err
    console.log(documents)
  })
  client.close()  
})
//toArray() returns an array.