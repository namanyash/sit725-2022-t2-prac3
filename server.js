const express = require('express')
const app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/p/:test', function(req, res) {
    res.send("Output: " + req.params.test);
});

var port = process.env.port || 3000;

app.listen(port, ()=>{
    console.log("App is running on the port: "+ port)
})