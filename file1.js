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
var port =process.env.PORT||2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

let {studentsData}=require("./file2");
let fs=require("fs");
let fname="students.json";

app.get("/svr/resetData",function(req,res){
    let data=JSON.stringify(studentsData)
    fs.writeFile(fname,data,function(err){
        if(err) res.status(404).send(err);
        else res.send("Data in file is reset");
    })
});
app.get("/svr/students",function(req,res){
    fs.readFile(fname,"utf8",function(err,content){
        if(err) res.status(404).send(err);
        else {
            let data=JSON.parse(content)
            res.send(data);
        }
    })
})

app.get("/svr/students/:id",function(req,res){
    let id=+req.params.id;
    fs.readFile(fname,"utf8",function(err,content){
        if(err) res.status(404).send(err);
        else{
            let array=JSON.parse(content);
            let Student=array.find((a)=>a.id===id);
            if(Student)
                res.send(Student);
            else
                res.status(404).send("No student found");
        }
    })
})
app.get("/svr/students/course/:name",function(req,res){
    let name=req.params.name;
    fs.readFile(fname,"utf8",function(err,content){
        if(err) res.status(404).send(err);
        else{
            let array=JSON.parse(content);
            let Student=array.filter((a)=>a.course===name);
            res.send(Student);
        }
    })
});

app.post("/svr/students",function(req,res){
    let body=req.body;
    fs.readFile(fname,"utf8",function(err,content){
        if(err) res.status(404).send(err);
        else{
            let array=JSON.parse(content);
            let maxId=array.reduce((acc,curr)=>curr.id>acc?curr.id:acc ,0);
            let newId=maxId+1;
            let Student={id:newId,...body};
            array.push(Student);
            let arr1=JSON.stringify(array);
            fs.writeFile(fname,arr1,function(err){
                if(err) res.status(404).send(err)
                else{
                    res.send(Student);
            }
            })
        }
    })
});

app.put("/svr/students/:id",function(req,res){
    let id=+req.params.id;
    let body=req.body;
    fs.readFile(fname,"utf8",function(err,content){
        if(err) res.status(404).send(err)
        else{
            let arr1=JSON.parse(content);
            let idx=arr1.findIndex((a)=>a.id===id);
            if(idx>=0){
                let update={id:id,...body};
                arr1[idx]=update;
                let data=JSON.stringify(arr1);
                fs.writeFile(fname,data,function(err){
                    if(err) res.status(404).send(err);
                    else res.send(update)
                })

            }else{
                res.status(404).send("No student found");
            }
    }
    })
})
app.delete("/svr/students/:id",function(req,res){
    let id=+req.params.id;
    fs.readFile(fname,"utf8",function(err,content){
        if(err) res.status(404).send(err)
        else{
            let arr1=JSON.parse(content);
            let index=arr1.findIndex((b)=>b.id===id);
            if(index >= 0){
                let deleted=arr1.splice(index,1);
                let data=JSON.stringify(arr1);
                fs.writeFile(fname,data,function(err){
                    if(err) res.status(404).send(err);
                    else{
                        res.send(deleted);
                    }
                });
            }else{
                res.status(404).send("No student found");
            }
    }
    })
})