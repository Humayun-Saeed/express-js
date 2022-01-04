

const allstudent=(req,res)=>{
    res.send("all the students are availble: ")
}

const deletestudent=(req,res)=>{
console.log(req.params);
const {id}=req.params;
    //res.send(`this is the id of the stdent:   ${id}  `)
if(id==10){
    res.send("this is id of the tayyab aman: ")
}
else{
    res.send("thsi the id of the shahjahn from the cheap village which has a lack of technolgy: ")
}
}

module.exports={allstudent,deletestudent};