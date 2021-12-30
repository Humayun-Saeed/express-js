var express=require('express');
var app=express();

var student=require('./Student');

//for loading router modules
app.use('/sir',student);

app.listen(8000,(req,res)=>{

    console.log("listening to consecitive port: ");
})