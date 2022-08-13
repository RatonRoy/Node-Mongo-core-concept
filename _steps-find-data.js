/**********
 * -------------------------------------
 * Get method to read the data 
 * --------------------------------------
 * app.get('path name', async (req, res) => {
 *  1. Make a query for find the data. if you want to find all the data use the empty object query otherwise give the condition inside query. 
 * 1.1. Here I used the query const query = {};
 * 2. Make the cursor and pass the query to find the data for multiple data use find() method or find one data use findOne() method. 
 * 2.1 const cursor =  userCollection.find(query);
 * 3. convert the cursor to array 
 * 3.1 const users = await cursor.toArray();
 * 4. Last steps is res.send(users);
 * 
 * Full code below 
 * // to read the data from the database use this method here.
		app.get('/users', async (req, res) => {
			const query = {};
			const cursor = userCollection.find(query);
			const users = await cursor.toArray();
			res.send(users);
		})
 * })
 * 
 * 
 * 
 * 
 * ********* */