
const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if (err){
        return console.log('Unable connect to MongoDB');
    }
    console.log('Connected to MongoDB Server');
    var db = client.db('TodoApp');

    // //delete many
    // db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=>{
    //     console.log(result);
    // });
    //
    // //delete many
    // db.collection('Todos').deleteOne({text:'eat lunch'}).then((result)=>{
    //     console.log(result);
    // });
    //
    // //findoneanddelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result);
    // });
    //delete many
    db.collection('Users').deleteMany({name:'Max'}).then((result)=>{
        console.log(result);
    });
    db.collection('Users').findOneAndDelete({
        _id:new ObjectID("5b81165c3fbf5e098cbd141e")
    }).then((result)=>{
        console.log(result);
    });
    client.close();
});