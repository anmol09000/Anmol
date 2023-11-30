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

let products = [
   
		{
      prodCode:	"DS2S245",
      category:	"Dining",
      desc:	[
          "Two	seater	Dining	Set",
          "Built	from	High	quality	wood",
          "1	year	warranty"
      ],
      img:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSE8uIdy_Zwi68DLvGa3ebtTaaW9Wap6Vnt_OXUtyLGEifBvOmSRdf2QmaMV_NgoB0OD1PAWXFsvAfVf9MnHSU-L98_yuqu7ei07f4hOw68&usqp=CAE",
      ingredients:	[
          {	ingName:	"Dining	Table",	qty:	1	},
          {	ingName:	"Chair",	qty:	2	}
      ],
      title:	"Two	seater	Dining	Set"
  },
  {
      prodCode:	"DS6S761",
      category:	"Dining",
      desc:	[
          "Six	Seater	Dining	Set	in	Antique	Cherry	Colour",
          "Assembly	by	Skilled	Carpenters",
          "Made	from	Teak	wood"
      ],
      img:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS26fVV0RuJa_B7gwGYlLIGz4rMljwYQxFSPav2BDTbcpMJYZDIjF6uHV2Xi55LXD9kke3BzD8yvnDPowvvwWcq05UftzJe&usqp=CAE",
      ingredients:	[
          {	ingName:	"Dining	Table",	qty:	1	},
          {	ingName:	"Chair",	qty:	4	},
          {	ingName:	"Bench",	qty:	1	}
      ],
      title:	"Six	Seater	Dining	Set"
  },
  {
      prodCode:	"DS4S177",
      category:	"Dining",
      desc:	[
          "Mild	Steel	Four	Seater	Dining	Set	in	Black	Colour",
          "Knock-down	construction	for	easy	transportation"
      ],
      img:
          "https://rukminim2.flixcart.com/image/832/832/kthjy4w0/dining-set/z/h/x/120-black-0-0-mild-steel-48-rectangle-55-89-28-90-4-seater-140-original-imag6tcezf5wurfq.jpeg?q=70",
      ingredients:	[
          {	ingName:	"Dining	Table",	qty:	1	},
          {	ingName:	"Chair",	qty:	4	}
      ],
      title:	"Mild	Steel	Dining	Set"
  },
  {
      prodCode:	"DC2S705",
      category:	"Dining",
      desc:	[
          "Solid	Wood	Dining	Chair	Set	of	Two	in	Dark	Walnut	Colour",
          "Beautiful	design	carved	on	dining	chair",
          "Dining	chair	seat	upholstered	in	dark	brown	Fabric"
        ],
				img:
						"https://www.orangetree.in/cdn/shop/files/Gallery-1AcmeDiningChairSetOf2.jpg?v=1692271042",
				ingredients:	[{	ingName:	"Chair",	qty:	2	}],
				title:	"Dining	Chair	Set"
		},
		{
				prodCode:	"BN1S388",
				category:	"Dining",
				desc:	[
						"Solid	Wood	Dining	Bench	in	Dark	Walnut	Colour",
						"Comfortable	bench	for	a	relaxed	dinner"
				],
				img:
						"https://www.home-designing.com/wp-content/uploads/2019/09/Industrial-Style-Dining-Bench-With-Back-Metal-Legs-Wood-Seat-Distressed-Rustic-Finish-600x600.jpg",
				ingredients:	[{	ingName:	"Bench",	qty:	1	}],
				title:	"Dining	Bench"
		},
		{
				prodCode:	"SF2S532",
				category:	"Drawing",
				desc:	[
						"Characteristic	Rising	Track	Arm	Rest	Design",
						"Premium	High	Gloss	Leatherette	Upholstery",
						"Independent	Headrest	And	Lumber	Support"
				],
				img:
						"https://ii1.pepperfry.com/media/catalog/product/m/i/1600x800/miranda-fabric-2-seater-sofa-in-cool-cobalt-colour-miranda-fabric-2-seater-sofa-in-cool-cobalt-colou-zkk4lp.jpg",
				ingredients:	[{	ingName:	"Sofa",	qty:	1	}],
				title:	"Two	Seater	Sofa"
		},
		{
				prodCode:	"SF2S206",
				category:	"Drawing",
				desc:	["Two	Seater	Sofa	in	Blue	Colour",	"Assembly	by	Skilled	Carpenters"],
				img:
						"https://ouchcart.com/cdn/shop/products/Rousseau_Loveseat.webp?v=1649323895&width=700",
				ingredients:	[{	ingName:	"Sofa",	qty:	1	}],
				title:	"Two	Seater	Sofa"
		},
		{
				prodCode:	"SFBD311",
				category:	"Drawing",
				desc:	[
						"Sofa	Cum	bed	in	Brown	Colour",
						"Ply-wood	construction	with	hand	polished	finish",
						"Removable	fabric	cover	on	best	quality	foam	mattress",
						"Throw	cushions	and	bolsters	come	with	the	product"
				],
				img:
						"https://sofabed.pk/wp-content/uploads/2022/08/Chinafurniture-simple-modern-sofa-bed-multifunctional-folding-dual-purpose-small-apartment-fabric-sofa.jpg_Q90.jpg",
				ingredients:	[{	ingName:	"Sofa",	qty:	1	},	{	ingName:	"Cushions",	qty:	2	}],
				title:	"Sofa	cum	Bed"
		},
		{
				prodCode:	"BDQS381",
				category:	"Bedroom",
        desc:	[
          "Wood	Box	Storage	King	Size	Bed	in	Wenge	Colour	",
          "Box	Storage	included	for	Maximum	space	utilization",
          "Mattress	is	included"
      ],
      img:
          "https://www.godrejinterio.com/imagestore/B2C/56101515SD00515/56101515SD00515_A1_803x602.jpg",
      ingredients:	[{	ingName:	"Bed",	qty:	1	},	{	ingName:	"Mattress",	qty:	2	}],
      title:	"King	size	Bed"
  },
  {
      prodCode:	"BDQS229",
      category:	"Bedroom",
      desc:	[
          "Wood	Hydraulic	Storage	Queen	Size	Bed",
          "Half	hydraulic	storage",
          "Superior	E2	grade	MDF	used	with	melamine	finish"
      ],
      img:"https://woodentwist.com/cdn/shop/products/WhatsAppImage2022-07-25at11.06.00PM.1278_938x938.jpg?v=1689871645",
      ingredients:	[{	ingName:	"Bed",	qty:	1	}],
      title:	"Queen	size	Bed"
  },
  {
      prodCode:	"ST1T425",
      category:	"Study",
      desc:	[
          "Wood	Study	Table	in	Walnut	Colour",
          "Assembly	by	Skilled	Carpenters",
          "Built	from	High	Quality	Wood"
      ],
      img:
        "https://wakefitdev.gumlet.io/img/study-tables/neptune/0c.jpg?w=1600",
      ingredients:	[{	ingName:	"Study	Table",	qty:	1	}],
      title:	"Study	Table"
  },
  {
      prodCode:	"ST1T588",
      category:	"Study",
      desc:	[
          "	Wood	Study	Table	in	Highgloss	White	&	Blue	Colour",
          "Study	table	comes	with	bookshelf	on	top,	5	drawers	&	1	open	shelf",
          "Superior	quality	MDF	with	stain	resistant	melamine	finish"
      ],
      img:
          "https://ik.imagekit.io/durian1985/Durian/durian/product/800x800/666101683123019.jpg",
      ingredients:	[{	ingName:	"Study	Table",	qty:	1	}],
      title:	"Study	Table"
  }
]
let users=[{email:"user@user.com",password:"user123",role:"user"},{email:"admin@admin.com",password:"admin123",role:"admin"}]

app.get("/products",function(req,res){
  res.send(products);
});
app.get("/products/:category/:prodCode",function(req,res){
  let {prodCode,category} = req.params;  
  let product = products.find((a)=>a.prodCode===prodCode && a.category === category);
  if(product) res.send(product);
  else res.status(404).send("Not Found");
});
app.get("/products/:category", function(req, res) {
  let category = req.params.category;
  let filteredProducts = products.filter((a) => a.category === category);
  console.log(category);
  console.log(filteredProducts);
  if (filteredProducts.length > 0) {
    res.send(filteredProducts);
  } else {
    res.status(404).send("Not Found");
  }
});
app.post("/login",function(req,res){
  let {email,password}=req.body;
  let user = users.find((a)=>a.email===email && a.password === password);
  if(user){
    res.send({email:user.email,role:user.role});
  }else{
    res.status(401).send("Check email or password");
  }
})
app.put("/products/:category/:prodCode",function(req,res){
  let {category,prodCode}=req.params;
  let body = req.body;
  let index = products.findIndex((a)=>a.category===category && a.prodCode === prodCode);
  if(index>=0){
    let updated = {...body};
    products[index]=updated;
    res.send(updated);
  }else{
    res.status(404).send("Not Found")
  }
})
app.post("/products",function(req,res){
  let body = req.body;
  let data = {...body};
  products.push(data);
  res.send(data);
})
app.delete("/products/:category/:prodCode",function(req,res){
  let {category,prodCode}=req.params;
  let index = products.findIndex((a)=>a.category===category && a.prodCode === prodCode);
  if(index>=0){
    let deleted = products.splice(index,1);
    res.send(deleted);
  }else{
    res.status(404).send("Not Found")
  }
})
