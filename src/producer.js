const { MongoClient } = require('mongodb');

async function run() {
  const client = new MongoClient('mongodb://172.18.0.7');
  await client.connect();
  console.log('Connected successfully to server');
  
  const db = client.db('Tutorial1');
  const ordersCollection = db.collection('orders');
  
  // Insert a document into the "orders" collection
  await ordersCollection.insertOne({ test: 1 });
  
  // Close the connection
  await client.close();
}

run().catch(console.error);
