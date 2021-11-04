# triptip-api
Api for triptip app (https://github.com/simonriple/triptip)

## Run api locally:  
### Connect to a mondodb database.    
You need a mongodb database to store the data. You can create a local instance like this (https://docs.mongodb.com/guides/server/install/) or create a free tier Atlas mongodb instance like this (https://docs.atlas.mongodb.com/tutorial/deploy-free-tier-cluster/).  
After setting ut your db you need to set connection string as process.env.CUSTOMCONNSTR_mongodb_connection_string;

### Starting the api  
Start the api by runnin the following command inside the project folder in a terminal:  
 - `yarn`
 - `yarn dev`
