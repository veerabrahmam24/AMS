const express =require('express')
const mongoose =require('mongoose')
const bodyParser = require('body-parser')
const url="mongodb://localhost/sec01"
const app = express()
mongoose.connect(url);
const con =mongoose.connection;

con.on('open',()=>{
    console.log('Connected...')
})
app.use(express.json())
const studentRouter=require("./routes/students")
app.use("/students",studentRouter);
app.listen(9000,()=>{
    console.log("Server started..")
})

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const connection = mongoose.connection;
// const app = express();
// const port = process.env.port || 4201;

// mongoose.connect('mongodb+srv://2000030859:2000030859@paryatak.n4d8c.mongodb.net/paryatak?retryWrites=true&w=majority',{useNewUrlParser: true , useUnifiedTopology: true});

// connection.once('open', () => console.log("Paryatak Connected to the MongoDB"));


// const UserRoute=require('./routes/userRoute');

// app.use(cors());
// app.use(bodyParser.json());
// app.use('/user',UserRoute);


// app.listen(port, () => console.log(`running on the server ${port}`));