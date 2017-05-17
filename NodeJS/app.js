// npm install express npm install body-parser
// node app.js
var express = require('express')
var app = express()
var bodyParser = require('body-parser')


var users = [];
var products = [];


function Login(uname,pass) {
	this.username = uname;
	this.password = pass;

}

function Product(city,jartype,price) {
	this.city = city;
	this.jartype =  jartype;
    this.price = price;
}

var user1 = new Login('test','pass');
users.push(user1);
var user2 = new Login('test1','pass1');
users.push(user2);
var user3 = new Login('test2','pass2');
users.push(user3);
var user4 = new Login('test3','pass3');
users.push(user4);
var user5 = new Login('test4','pass4');
users.push(user5);

var rize250 = new Product('Rize','250 gram',100);
var rize500 = new Product('Rize','500 gram',175);
var rize1000 = new Product('Rize','1 kg',300);

var erzurum250 = new Product('Erzurum','250 gram',125);
var erzurum500 = new Product('Erzurum','500 gram',225);
var erzurum1000 = new Product('Erzurum','1 kg',400);


var mugla250 = new Product('Muğla','250 gram',75);
var mugla500 = new Product('Muğla','500 gram',125);
var mugla1000 = new Product('Muğla','1 kg',250);

products.push(rize250);
products.push(rize500);
products.push(rize1000);

products.push(erzurum250);
products.push(erzurum500);
products.push(erzurum1000);

products.push(mugla250);
products.push(mugla500);
products.push(mugla1000);



app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



app.get('/cities', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ "cities": [ {"name": "Rize"}, {"name": "Muğla"},{"name":"Erzurum"} ] }));
})



app.get('/products', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(products));
})

app.get('/honeyjars', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ "jars": [ {"type": "250 gram"}, {"type": "500 gram"},{"type":"1 kg"} ] }));
})

app.post('/login',function (req, res) {
		
	  var controlUser = req.body;
	  var found = false;
	  
	   for (i = 0; i < users.length; i++) { 
		           var user = users[i];
		             if ((user.username == controlUser.username) && (user.password == controlUser.password)) {
					  found = true;
					  res.send(JSON.stringify({ "response": "Success"  }));
					 
					 }
	   }
  
	   if (!found) {
		  res.send(JSON.stringify({ "response": "Fail"  }));
	   }


})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})