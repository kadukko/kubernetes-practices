require('dotenv').config()
const ContactRepository = require('./contact.repo')
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send("This is an API service!")
})

app.get('/contacts', async (req, res, next) => {
  try {
    const contacts = await ContactRepository.getAll()
    res.json({ success: true, payload: { contacts } })
  } catch (err) {
    next(err)
  }
})

app.post('/contacts', async (req, res) => {
  try {
    const { name, phone } = req.body
    await ContactRepository.create({ name, phone })
    res.json({ success: true })
  } catch (err) {
    next(err)
  }
})

app.use((err, req, res, next) => {
  res.status(500).send(err)
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log('Listening to localhost:' + PORT)
})