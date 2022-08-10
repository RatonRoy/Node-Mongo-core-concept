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