const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const getMail = require("./routes/getmail")
const insertMail = require("./routes/insertmail")
const cornJob=require("./functions/job")
const {mongoURL} = require("./config")

cornJob.start()

app.use(bodyParser.urlencoded({extended:true}));

app.use(getMail)
app.use(insertMail)

mongoose.connect(mongoURL,{ useNewUrlParser: true, useUnifiedTopology: true})
.then(mc=>{
    console.log("connected to database" )
} )
.catch(err=>{
    throw (err)
})

app.listen(3000,(err)=>{
    if(err){
        throw err
    }
    console.log("server running");
})