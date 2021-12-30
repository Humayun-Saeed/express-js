const { response } = require('express');
var express=require('express');
const res = require('express/lib/response');
var app=express();


/*app.get('/student/all/:id',(req,res)=>{
    console.log(req.params);

    res.send("data about to the student: "+req.params.id)
})
app.get('/student/all/:product/:id',(req,res)=>{
    console.log(req.params);

   // res.send("data about to the student: "+req.params.product)

   const {product,id}=req.params;
   res.send(product)


   
})*/

/*app.get('/train/:from.:to',(req,res)=>{

    console.log(req.params);
//c//onst {from,to}=req.params;
//res.send(from+"destination"+to);
const{form,to}=req.params;

res.send(form+"destination"+to);
})*/


//with rgex

/*app.get('/student/all/:id([0-9]{2})',(req,res)=>{
    console.log(req.params);

    res.send("data about to the student: "+req.params.id)
})*/

/*app.get('/:post(post|article)/:article',(req,res)=>{
    console.log(req.params);
    const {post,article}=req.params;
    res.send(post+"  "+ article);
})*/

/*app.param('id',(req,res,next,id)=>{

   console.log(`id+${id}`);
    next()
})
app.get('/user/:id',(req,res)=>{

    res.send("response generated")
})*/
app.param(['id','page'],(req,res,next,value)=>{
console.log(`the values are here: +${value}`);
next()

})

app.get('/user/:id/:page',(req,res)=>{
res.send("this is executed: ")

})

app.listen(8000,(req,res)=>{

    console.log("listening to consecitive port: ");
})
