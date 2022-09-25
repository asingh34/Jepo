const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

//app.get('/questions', db.getQuestions)

//app.get('/getFive',db.getFive)

app.get('/getCats',db.getCats)
app.get('/getId',db.getId)
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})


