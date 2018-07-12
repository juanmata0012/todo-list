var express =require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.send({message: "Hello from the ROOT Route"})
})

app.use('/api/todos', todoRoutes);

app.listen(port, function(){
  console.log("APP is running on PORT " + process.env.PORT)
})
