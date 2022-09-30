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


app.get('/getCats',db.getCats)

app.get('/getUsers',db.getUsers)
app.get('/getUserById',db.getUserById)
app.get('/createUser',db.createUser)
app.get('/updateUser',db.updateUser)
app.get('/deleteUser',db.deleteUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})


