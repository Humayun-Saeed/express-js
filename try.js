
var express=require('express')

var app=express();


/*app.get('/student/all',(req,res)=>{

    res.send("hello from the allside:")
})*/
/*app.all('*',(req,res)=>{

    res.send("page is not found at the moemnet: ")
})*/
/*app.all('/api/*',(req,res)=>{

    res.send("curently api is not found at the moment: ")
})*/

/*app.get('/ab?cd',(req,res)=>{

    res.send("will be print whenver ypu enter abcd or acd")
})*/

/*app.get(/a/,(req,res)=>{
    res.send("when someone enters the key word which includes the alphabet like a: ")
})*/

app.get('/geo',(req,res,next)=>{

    console.log("this is first callback: ");
    next()
},(req,res)=>{
    console.log("this is thee second callback: ");
    res.send("this is a response: ")

})


app.listen(3000,()=>{
    console.log("server is runnig atr the moement: ");
})