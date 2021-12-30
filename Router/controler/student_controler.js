
var express=require('express');
const { allstudent, deletestudent } = require('./student.js');

var app=express();
var router=express.Router();




router.get('/student',allstudent)
router.get('/delete/:id',deletestudent);

module.exports=router;