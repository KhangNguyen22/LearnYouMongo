var mongo = require('mongodb').MongoClient

var firstName = process.argv[2]
var lastName = process.argv[3]
var doc = {
  firstName: firstName
, lastName: lastName
}

var url = 'mongodb://localhost:27017'
mongo.connect(url, function(err, client) {
  if (err) throw err
  var db = client.db('learnyoumongo')
  db.collection('docs').insert(doc, function(err, data) {
    if (err) throw err
    console.log(JSON.stringify(doc))
    
  })
    client.close()
})