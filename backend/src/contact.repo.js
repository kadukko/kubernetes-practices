const database = require('./database')
const { MongoClient } = require('mongodb')

const collectionName = 'contacts'

class ContactRepository {
  static async getAll() {
    const client = await database.connect()
    const collection = client.db().collection(collectionName)

    const contacts = await collection.find().toArray()

    await client.close()

    return contacts
  }

  static async create({ name, phone }) {
    const client = await database.connect()
    const collection = client.db().collection(collectionName)
  
    if (await collection.findOne({ phone })) {
      throw new Error('CONTACT_DUPLICATED')
    }

    await collection.insertOne({ name, phone })

    await client.close()
  }
}

module.exports = ContactRepository