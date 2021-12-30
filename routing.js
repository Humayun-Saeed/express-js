        //*******************ROUTING**************

//Methods fr the routing:
//GET (method is used for the reteive data)
//Post (for the create insert data)
//put  (mehod is used for the completely update data)
//patch (patch method is used for the partialy update the data)
//Delete (delte method is used for the delete data)
var express=require('express')
var app=express();

///this is used for the string path
app.get ('/home/student',(req,res)=>{
res.send("hello fromthe student side:");

})
app.put ('/home/ali',(req,res)=>{

    res.send("a new student ali is added: ");
})
app.all('/shame',(req,res)=>{
    res.write("by using the all fucntion: ");
})
//app.all('*',(req,res)=>{                //for showing that something is not found
   // res.send("page not found: ");
//})
//app.all('/api/*',(req,res)=>{            // for showing page when someone enter the data after the api
   // res.send("Api page is found: ");
//})
///********************************* */ string pattren path*******************************************************
/*app.get ('/ab?cd',(req,res)=>{

    res.send("if we will hit the abcd or acd then this will be working :");
})*/
/*app.get (/a/,(req,res)=>{                 //this will include the strings which include the key word A

    res.send("if we will hit the abcd or acd then this will be working :");
})*/

//****************for more then one callbacks********************************

/*app.get('/ki',(req,res,next)=>{
    console.log("this is th first callback:");
    res.send("hello jnaba pehla callback jay:");
    next()
},(req,res)=>{
    console.log("this si the secoond call back: ");
//console.("hellojnab a dosra callback jay zara tyan de nal:")

})*/

//********************array of the call backs///////////////////////////////////////
/*
var x=(req,res,next)=>{

    console.log("this is first call back: ");
    next()
}
var y=(req,res,next)=>{
    console.log("this is the second call back: ");
    next()
}
var z=(req,res)=>{
    console.log("this is the third call back:");
    res.send("array of the callbacks: ")
}
app.get('/geo',[x,y,z]);

*/

//****************************************Combination of Independent and Array of Callback*************
/*var x=(req,res,next)=>{

    console.log("this is first call back: ");
    next()
}
var y=(req,res,next)=>{
    console.log("this is the second call back: ");
    next()
}
app.get('/geo',[x,y],(req,res,next)=>{
console.log("this is third call back:");
next ()
},(req,res)=>{
    console.log("this is the fourth call back: ");
    res.send("this is third call back which is executd in the web bri=owser: ")

});*/
//************************************* Chained Route Callbacks******************* */
app.route('/student')

//.get((req,res)=>{

//})
.post((req,res)=>{
    res.send("data of the new student is added")
})
.put((req,res)=>{
    res.send("data is successfully updated:")
})


app.listen(8000,()=>{
    console.log("server sis listening at te consecitive port");
})