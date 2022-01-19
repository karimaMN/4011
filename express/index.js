const express = require('express')
const app = express()
const port = 3000
const { corsOptionsRequests, corsSimpleRequests } = require('./middleware/cors')
const bodyParser = require('body-parser')

app.options('*', corsOptionsRequests)
app.use(corsSimpleRequests)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



app.get('/', (req, res) => {
  res.send('hello world ')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})