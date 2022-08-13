/*************
 * -----------------------------------
 * 1. catch data from client side 
 * -----------------------------------------
 * 1.1 Full code here 
 *  app.post('/user', (req, res) => {
			const newUser = req.body;
			console.log('adding new user here', newUser);
			res.send({
				result: 'success'
			});
	*1.2 Capture the data that send from client side by using req.body and assign the data to the newUser variable. 
	*1.3 response data send must be json formate so use the 
		res.send({
		result : 'success'
		})
		-----------------------------------
		*2. Inserted data to the mongodb database. 
	   -------------------------------------------------
	   2.1. const result = await userCollection.insertOne(newUser);
	   2.2. res.send(result);
 * *********** */