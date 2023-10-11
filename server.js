var express = require("express");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
    res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
  );
  next();
});
const port = 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

let {data}=require("./data1.js");
let fs=require("fs");
let fname="students.json";

app.get("/resetData",function(req,res){
    let arr=JSON.stringify(data);
    fs.writeFile(fname,arr,function(err){
        if(err) res.status(404).send(err);
        else res.send("Data in the file is reset");
    })
});

app.get("/customers",function(req,res){
    fs.readFile(fname,"utf8",function(err,content){
        if(err) res.status(404).send(err);
        else{
            let arr=JSON.parse(content);
            res.send(arr);
        }
    })
})

app.post("/customers",function(req,res){
    let body=req.body;
    fs.readFile(fname,"utf8",function(err,content){
        if(err) res.status(404).send(err);
        else{
            let arr=JSON.parse(content);
            let newData={...body};
            arr.push(newData);
            let data1=JSON.stringify(arr);
            fs.writeFile(fname,data1,function(err){
                if(err) console.log(err);
                else res.send(newData)
            })
        }
    })
});

app.put("/customers/:id",function(req,res){
    let id=req.params.id;
    let body=req.body;
    fs.readFile(fname,"utf8",function(err,content){
        if(err) res.status(404).send(err);
        else{
            let arr=JSON.parse(content);
            let index=arr.findIndex((a)=>a.id===id);
            if(index>=0){
                let update={id:id,...body};
                arr[index]=update;
                let data=JSON.stringify(arr);
                fs.writeFile(fname,data,function(err){
                    if(err) res.status(404).send(err);
                    else res.send(update)
                })
            }else res.status(404).send("No Data Found")
        }
    })
});

app.delete("/customers/:id",function(req,res){
    let id=req.params.id;
    fs.readFile(fname,"utf8",function(err,content){
        if(err) res.status(404).send(err);
        else{
           let arr=JSON.parse(content);
           let index=arr.findIndex((a)=>a.id===id);
           if(index>=0){
                let deleted=arr.splice(index,1);
                let data=JSON.stringify(arr);
                fs.writeFile(fname,data,function(err){
                    if(err) res.status(404).send(err)
                    else res.send(deleted);
                })
           }else res.status(404).send("No Data Found");
        }
    })
});