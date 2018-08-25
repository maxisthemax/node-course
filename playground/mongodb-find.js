
const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if (err){
        return console.log('Unable connect to MongoDB');
    }
    console.log('Connected to MongoDB Server');
    var db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id:new ObjectID('5b8030aa958e7b194ca63cdc')
    // }).toArray().then((docs)=>{
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch');
    // });
    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todo Count ${count}`);
    // },(err)=>{
    //     console.log('Unable to fetch');
    // });
    // client.close();
    db.collection('Users').find({
        name:'Max'
    }).count().then((count)=>{
        console.log(`Max = ${count}`);
    });

    db.collection('Users').find({
        name:'Max'
    }).toArray().then((docs)=>{
        return console.log(JSON.stringify(docs,undefined,2));
    });
    client.close();
});