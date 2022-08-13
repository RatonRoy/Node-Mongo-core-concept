/******
 * 1. import MongoClient, ServerApiVersion from mongodb [const { MongoClient, ServerApiVersion } = require('mongodb');]
 * 
 * 2. get uri and client from the mongodb database connection setting like this [
    const uri = "mongodb+srv://crud-operation:<password>@curd.vrwqzgs.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

 ]
 Here two thing is very important that replace the password by original database password 
 * 
 ***** Write this function to connect the data 
 async function run() {
	try {
		await client.connect();
		const userCollection = client.db('databaseName').collection('collectionName');
		const demoObject = {
			name: 'Mohona Nodi', email: 'mohonanodi@gmail.com'
		}
		const result = await userCollection.insertOne(demoObject);
		console.log(`A document was inserted with the _id: ${result.insertedId}`);
	}
	finally {
		// await client.close();
		this is comment out because I want to use the database insertion again and again after one insertion complete. 
	}
}
run().catch(console.dir);
 * 
 * ********* */