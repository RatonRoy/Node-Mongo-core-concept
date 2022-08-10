const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000; 

// user name : crud-operation
// password : iUBZuAo1pIIgIpxF

// use the middle ware 
app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://crud-operation:iUBZuAo1pIIgIpxF@curd.vrwqzgs.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
	try {
		await client.connect();
		const userCollection = client.db('demoDatabase').collection('demoCollection');
		const demoObject = {
			name: 'Mohona Nodi', email: 'mohonanodi@gmail.com'
		}
		const result = await userCollection.insertOne(demoObject);
		console.log(`A document was inserted with the _id: ${result.insertedId}`);
	}
	finally {
		// await client.close();
	}
}

run().catch(console.dir);


app.get('/', (req, res) => {
	res.send("Running My Node Server for Curd operation");
})

app.listen(port, () => {
	console.log(`My Node server is running in the Port ${port}`);
})