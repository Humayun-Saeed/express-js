

var express=require('express')

var app=express();

var student=require('./student_controler.js');

app.use('/student',student)

app.listen(3000,()=>{
    console.log("server is runnig at this port: ");
})