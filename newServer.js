var express = require("express");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
    res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
  );
  next();
});
const port = 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));
const _ = require("lodash");

let {mobiles} = require("./Cart.js");
let pageSize=14;

app.get("/products/:category/:brand",function(req,res){
    let {category,brand} = req.params;
    let {assured,ram,rating,price,sort,page,q} = req.query;
    let data = mobiles;
    let pageNum = +page;
    if(q){
      data = data.filter((a)=>a.name.includes(q));
    }
    if(ram){
      switch(ram){
        case ">=6" : data = data.filter((a)=>a.ram>=6); break;
        case "<=4" : data = data.filter((a)=>a.ram<=4); break;
        case "<=3" : data = data.filter((a)=>a.ram<=3); break;
        case "<=2" : data = data.filter((a)=>a.ram<=2); break;
        default : break;
      }
    }
    if(rating){
      switch(rating){
        case ">4" : data = data.filter((a)=>parseFloat(a.rating)>4); break;
        case ">3" : data = data.filter((a)=>parseFloat(a.rating)>3); break;
        case ">2" : data = data.filter((a)=>parseFloat(a.rating)>2); break;
        case ">1" : data = data.filter((a)=>parseFloat(a.rating)>1); break;
        default : break;
      }
    }
    if(price){
      switch(price){
        case "0-5000" : data = data.filter((a)=>a.price<5000); break;
        case "5000-10000" : data = data.filter((a)=>a.price>5000 && a.price<10000); break;
        case "10000-20000" : data = data.filter((a)=>a.price>10000 && a.price<20000); break;
        case "20000" : data = data.filter((a)=>a.price>20000); break;
        default : break;
      }
    }
    if(sort){
      switch(sort){
        case "asc" : data = data.sort((a,b)=>a.price - b.price ); break;
        case "desc" : data = data.sort((a,b)=>b.price - a.price ); break;
        case "popularity" : data = data.sort((a,b)=>a.popularity - b.popularity ); break;
        default : break;
      }
    }
    if(assured){
      data = data.filter((a)=>a.assured===true)
    }
    let product = data.filter((a)=>a.category===category && a.brand === brand);
    res.send(makeData(product,pageSize,pageNum));
});

let makeData=(data,size,page)=>{
  let startIdx = (page-1)*size;
  let endIdx = data.length > startIdx+size-1 ? startIdx+size-1 : data.length-1;
  let data1 = data.filter((a,index)=> index>=startIdx && index<=endIdx );
  let totalPages = Math.ceil(data.length/size);
  let fullData={
    data:data1,
    page:page,
    totalItems : data1.length,
    totalNum : data.length,
    totalPages : totalPages,
  }
  return fullData;
};

app.get("/deals",function(req,res){
  let randomData = _.sampleSize(mobiles,14);
  res.send(randomData);
})


