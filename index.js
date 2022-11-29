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
//TODO
//app.get('/createGb',db.createGb)//creates a gameboard
//app.get('/updateGb',db.updateGb)//updates a gameboard by ID
//app.get('/deleteGb',db.deleteGb)//delete a gameboard
//
//app.get('/saveGb',db.saveGb)//saves a gameboard to users profile... thinking now i need to add a gameboard section in the users table.
//app.get('/getUserGb')',db.getUserGb)//gets gameboards saved by a user by userID
//



app.get('/getCats',db.getCats)//get categories + cardinality

app.get('/getRandom',db.getRandom)//get one random question 

app.get('/getUsers',db.getUsers)//gets all users
app.get('/getUserById',db.getUserById)//gets user by id
app.get('/createUser',db.createUser)// creates a user
app.get('/updateUser',db.updateUser)// updates a user
app.get('/deleteUser',db.deleteUser)// deletes a user

app.get('/getLb',db.getLb)//get the global leaderboard
//app.get('/updateLb',db.updateLb)//update the leaderboard... this will be interesting. everytime a game is played, will have to check users W/L records and update
app.get('/getTopten',db.getTopten)//get the top ten of the leaderboard


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})


