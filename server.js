var express = require('express');
var hbs = require('hbs');
var app     = express();
var port    = 3007;

app.set("view engine", "hbs");
app.set('views', './views');

app.get('/', function(req,res) {
  res.send("Welcome to Pizza Express!");
});

app.get('/topping/:type', function(req, res, next) {
  res.send(`${req.params.type} + pizza! Good choice.`);
});

app.get('/order/:amount/:size', function(req, res, next) {
     res.send(`Your order of ${req.params.amount} ${req.params.size} pizzas will be ready shortly.`);
 });

app.listen(port, function(){
  console.log('LISTENING ON PORT ' + port);
  console.log('Are you having fun yet?');
});
