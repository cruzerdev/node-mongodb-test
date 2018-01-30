// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
// db.collection('Users').find({
//       _id: new ObjectID('5a6e2d3577de5d652ec43c10')
// }).toArray().then((docs)=>{
// db.collection('Users').find().count().then((count)=>{
//   // console.log('Todos');
//   // console.log(JSON.stringify(docs,undefined,2));
//   console.log(count);
// },(err)=>{
//   console.log('Unable to fetech todos',err);
// });
db.collection('Users').find({name:'Anuj',name:'Devanshu'}).toArray().then((docs)=>{
  console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
  console.log('Unable to fetech todos',err);
});


  //db.close();
});
