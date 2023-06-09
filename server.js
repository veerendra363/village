const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')

const app = express();

const corsOptions = {
	origin: 'http://localhost:8080/'
		}
app.use (cors(corsOptions));

// parse requests of content-type - application/json

app.use (bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded

app.use (bodyParser.urlencoded({extended:true}));

//simple route
app.get ('/', (req, res) => {
res.json({message: 'Welcome to My village'});
});

app.use('/vlg', routes)

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
console.log (`Server is running on port ${PORT}.` );
});