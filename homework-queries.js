db.version() //3.4.4

// Creating and swithing to 'binarySample' database:
use binarySample

// Importing the provided .json file into 'binarySample' database under 'sample' collection:
mongoimport--db binarySample--collection sample--file dataSample.json--jsonArray

// First task
// Find all users, who has any score in between 87 and 93
db.sample.find({scores: {$elemMatch: {score: {$gt: 87, $lt: 93}}}}).pretty()

// Second task
// Using aggregate, split($unwind) documents into multiple documents, by number of elements in "scores" field(column)
// Then find all users who has score > 90 in exam type
db.sample.aggregate([{"$unwind": "$scores"}, {"$match": {"scores.type": "exam", "scores.score": {$gt: 90}}}])

// Third task
// Add field(column) "accepted" with value "true" to the "Dusti Lemmond" user
db.sample.updateMany({"name":"Dusti Lemmond"}, {$set:{"accepted": true}})