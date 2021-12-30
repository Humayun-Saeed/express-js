

var express=require('express');
var app=express();
var router=express.Router();

router.get('/student/all',(req,res)=>{

    res.send("data about to the student: ")
})
router.post('/student/new',(req,res)=>{

    res.send("a new data is added about to the student: ")
})
router.put('/student/updated',(req,res)=>{

    res.send("a data of the new student is successfully updated: ")
})
router.delete('/student/delete',(req,res)=>{

    res.send("the data of the new student is successfully deletd: ")
})

app.listen(3000,()=>{

    console.log("the scurernt server si runnig at the moiment: ");
})

module.exports=router;