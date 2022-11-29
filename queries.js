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

const getUsers = (request, response) => {//get all users
  pool.query('SELECT * FROM users ORDER BY usr_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getUserById = (request, response) => {//get single user by ID
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM users WHERE usr_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const createUser = (request, response) => {//create new user
  const { name, email } = request.body

  pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.rows[0].userid}`)
  })
}
const updateUser = (request, response) => {//update existing user
  const userid = parseInt(request.params.userid)
  const { name, email } = request.body

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, userid],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${userid}`)
    }
  )
}
const deleteUser = (request, response) => {//delete user
  const userid = parseInt(request.params.userid)

  pool.query('DELETE FROM users WHERE id = $1', [userid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${userid}`)
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

const getRandom = (request,response) => {//get a random question from the whole table
  pool.query('select * from questions order by random() limit 1', (error,results) => {
    if(error){
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

getUsers,
getUserById,
createUser,
updateUser,
deleteUser,

getLb,
getTopten,

getRandom


}


