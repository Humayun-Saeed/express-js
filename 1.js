
var express=require('express');
var a=require('./try');
var url=require('url');
var fs=require('fs');
const app=express();
var adr='http://localhost:8080/default.htm?year=2017&month=february';

app.get('/name',(req,res)=>{
    //res.send("helo form the Home  side:")
//console.log(req.url.host);
//res.send(nam);

var c=url.parse(adr,true);
res.send(c.hostname);
})

app.get('/about',(req,res)=>{

   // res.send("hello form about us side: hello ");


fs.readFile('./try.js',(err,data)=>{
    if(err){
        console.log(err);
    }
    else
    {
        res.send(data.toString());
    }
})
}) 
app.get('/domain',(req,res)=>{
    res.send("helo form the Home  side:")
})
app.get('/hello',(req,res)=>{
    res.send("<h1>helllo yopu are visiting the conatact us page:</h1>");    //is used for the getting the html page:
})
app.get('/view',(req,res)=>{
    res.json([{                     //method used for the sending the jason data:
//arr,
        id:4,
        name:"humayun",
    }]);
})



    app.listen(8000,()=>{
        console.log("server is runnig at the moment: ");
    })
