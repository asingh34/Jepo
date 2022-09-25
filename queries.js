const Pool = require('pg').Pool
const pool = new Pool({
  user: 'anantsingh',
  host: 'localhost',
  database: 'jepdb',
//  password: 'password',
  port: 5432,
})

/*const getQuestions = (request, response) => {
    pool.query('select * from  questions order by  category asc', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}*/


/*const getFive = (request, response) => {
    pool.query('select category AND question FROM questions order by random() limit 5 ', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
*/

const getCats = (request, response) => {
    pool.query,('select category, count(*) as count from questions group by category order by count desc limit 5', (error, results) => {
        if (error) {
            throw error

            }
        response.status(200).json(results.rows)
    })
}

const getId = (request, response) => {
  pool.query('select id from questions limit 5', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}







module.exports = {
//getFive,
getId,
getCats,
//getQuestions,
// getUserById,
// createUser,
// updateUser,
// deleteUser,
}


