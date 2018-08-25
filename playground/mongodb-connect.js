//const MongoClient = require('mongodb').MongoClient;
// const {MongoClient,ObjectID} = require('mongodb');
// var user={
//     name:'Max',
//     age:25
// };
//
// var {name} = user;
// var obj = new ObjectID();
//
// console.log(name);
// console.log(obj);
const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if (err){
     return console.log('Unable connect to MongoDB');
    }
    console.log('Connected to MongoDB Server');
     var db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text:'something to do',
    //     complete:false
    // },(err,result)=>{
    //     if (err)
    //     {
    //         return console.log('Unable to insert Todo');
    //     }
    //
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });
    // db.collection('Users').insertOne({
    //     name:'Max',
    //     age:25,
    //     location:'Shah Alam'
    // },(err,result)=>{
    //     if (err){
    //         return console.log('Unable to insert Todo');
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    //     //console.log(JSON.stringify(result.ops,undefined,2));
    // });
    client.close();
});