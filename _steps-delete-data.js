/*************
 * 1. For deleting data require the ObjectId from the mongodb.
 * ----------------------------------------------------------------
 * 1.1. const ObjectId = require('mongodb').ObjectId;
 * 
 * 2. create the delete path use this type of path like 
 * -------------------------------------------------------
 * 2.1. app.delete('/pathname/:id', async (req, res) => {
		2.2. For select the id use this method like here 
		const id = req.params.id; 
		2.3 Make a query like this 
		const query = {_id : ObjectId(id)}
		2.4 pass the query to make the result like this 
		const result = await userCollection.deleteOne(query);
		res.send(result);
 * })
 * 
 * ************* */