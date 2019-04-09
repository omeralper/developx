const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('*', (req, res) => {  res.send('Hello World!') } )

var routes = require('./routes/CashRouter'); 
routes(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))