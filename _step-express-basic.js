/******
 * 1. for install the npm use npm init -y
 * 2. For install the other dependencies use this command line  npm i express cors mongodb. 
 * Cross-origin resources sharing use to connect the client side client request to the server side.
 * 
 * 3. Add two scripts in the package.json file. The files are 
 *  "start": "node index.js",
    "start-dev": "nodemon index.js",
 * 
 * 4. The basic 8 things need for every node server here is the steps are 
 * a. const express = require('express');
 * b. const cors = require(cors);
 * c. const app = express();
 * d. const port = process.env.PORT || 5000; 
 * Use the middle ware 

 * app.use(cors());
 *app.use(express.json());

 * e. app.get('/', (req, res) => {
	res.send("Running My Node Server for Curd operation");
})
 * f. app.listen(port, () => {
	console.log(`My Node server is running in the Port ${port}`);
})

The beginning  setup become like this for all of the Express Server 
[
const express = require('express');
const cors = require(cors);
const app = express();
const port = process.env.PORT || 5000; 


// use the middleware 
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send("Running My Node Server for Curd operation");
})

app.listen(port, () => {
	console.log(`My Node server is running in the Port ${port}`);
})
]
  



***** */