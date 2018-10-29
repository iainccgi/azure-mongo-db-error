# azure-mongo-db-error

Show the error with Cosmos MongoDB rejecting new records whenever a unique index with subdocuments

# How to use

Edit the .env file and change the **COSMOS_CONNECTION_STRING** to the connection string to your MongoDB

Then, run the file as follows

`node index.js`

# Outcomes

Against a normal MongoDB, all 3 models will save succesfully.

Against a CosmosDB with a MongoDB interface, Model A will save succesfully but Model B and Model C will fail to save.