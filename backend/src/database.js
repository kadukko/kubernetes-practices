const { MongoClient } = require("mongodb")

const MONGO_DB_URI = process.env.MONGO_DB_URI

module.exports = {
  connect: () => {
    
    const client = new MongoClient(MONGO_DB_URI)
    
    return client.connect()
  }
}