
const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if (err){
        return console.log('Unable connect to MongoDB');
    }
    console.log('Connected to MongoDB Server');
    var db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id:new ObjectID("5b811919a31673c62d805414")
    // },{
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID("5b8031505cecb49b7c7daa02")
    },{
        $set:{
            name:'Max Leong'
        },
        $inc:{
            age:1
        }
    }).then((result)=>{
        console.log(result);
    });

    client.close();
});