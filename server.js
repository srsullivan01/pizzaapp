var express = require('express');
var hbs = require('hbs');
var app     = express();
var port    = 3007;

app.set("view engine", "hbs");
app.set('views', './views');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res) {
    res.render("index.hbs", {
      message: "Welcome to Pizza Express!" });
});

app.get('/toppings/:type', function(req, res, next) {
  res.render("toppings.hbs", {
    data: req.params.type
  });
});

app.get('/order/:amount/:size', function(req, res, next) {
     res.render("order.hbs", {
       amount: req.params.amount,
       size: req.params.size
     });
   });

app.listen(port, function(){
  console.log('LISTENING ON PORT ' + port);
  console.log('Are you having fun yet?');
});
