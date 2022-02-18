import mongoose from "mongoose";

const conn = () => {mongoose.connect('mongodb+srv://vimmac:bo2z2YgKE1MKLIoX@cluster0.ia70z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        dbName: 'todolist'
    }
    ).then( () => {console.log("Mongodb connected")}
    ).catch( (err) => {
        return console.log(`Connection to database failed  ${err}`)
    });

};

export default conn;


// bo2z2YgKE1MKLIoX