const { response } = require('express')

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'anantsingh',
  host: 'localhost',
  database: 'jepdb',
//  password: 'password',
  port: 5432,
})

const getCats = (request, response) => {//list 5 categories with cardinality
    pool.query('select category, count(*) as count from questions group by category order by count desc limit 5', (error, results) => {
        if (error) {
            throw error
            }
        response.status(200).json(results.rows)
    })
  }
const getRandom = (request,response) => {//get a random question from the whole table with all attributes listed
  pool.query('select * from questions order by random() limit 1', (error,results) => {
    if(error){
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getRandomQuestion = (request, response) => {//get a random question from the whole table with no other attributes listed
  pool.query('select question from questions order by random() limit 1', (error,results) => {
    if(error){
      throw error
    }
    response.status(200).json(results.rows)
  })
}
  

const createUser = (request, response) => {//create new user
    console.log ('createUser params: ', request.query)
  const { name = '', email = '' } = request.query || {}

  pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


const getUsers = (request, response) => {//get all users
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getUserById = (request, response) => {//get single user by ID
    console.log ('getUserById params: ', request.query)
  const id = request.query.id

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const updateUser = (request, response) => {//update existing user
  const userid = request.query.id
  const { name, email } = request.query

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}
const deleteUser = (request, response) => {//delete user
    console.log ('deleteUser params: ', request.query)
  const userId = request.query.id
  const userName = request.query.name
  let stmt = "DELETE FROM users WHERE"
  let param = null

  if (userId != null) {
      stmt += " id = $1 returning *"
      param = userId
  }
  else if (userName != null) { 
      stmt += " name = $1 returning *"
      param = userName
  }
  else {
      throw "deleteUser needs either a specific id or a name"
  }

  pool.query(stmt, [param], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getLb = (request,response) => {//get the global leaderboard
  pool.query('SELECT * FROM leaderboard ORDER BY rank ASC',(error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


/*const updateLb = (request,response)=>{//update the leaderboard
  
}*/

const getTopten = (request,response) => {//get the top ten of the leaderboard
  pool.query('SELECT userid FROM leaderboard ORDER BY rank desc limit 10',(error,results)=>{
    if (error){
      throw error
    }
    response.status(200).json(results.rows)
  })
}


module.exports = {
getCats,
getRandom,
getRandomQuestion,


createUser,
getUsers,
getUserById,
updateUser,
deleteUser,

getLb,
getTopten


}