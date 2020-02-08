var express = require('express')
var app = express()
const port = 8000

app.get('/test', function (req, res) {
  res.send('hello Express')
})


app.listen(port, ()=> {
  console.log('Server listen at:', port);
})