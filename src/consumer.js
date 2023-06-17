const { MongoClient } = require('mongodb');
const { inspect } = require('util');

async function run() {
  const client = new MongoClient('mongodb://172.18.0.7');
  await client.connect();
  console.log('Connected successfully to server');
  
  const db = client.db('Tutorial1');
  const ordersCollection = db.collection('orders');
  
  const changeStream = ordersCollection.watch();
  
  console.log('A change stream is open on the Tutorial1.orders namespace. Currently watching...\n');
  
  changeStream.on('change', (change) => {
    console.log(inspect(change, { depth: null, colors: true }));
  });
}

run().catch(console.error);
