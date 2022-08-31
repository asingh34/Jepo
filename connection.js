const {Client} = require('pg')
const pg = require('pg')
const client = new Client({
    host: "localhost",
    user: "anantsingh",
    port: 5432,
//    password: "",
    database: "jepdb"
})


const pool = new pg.Pool(client);

const category = 'GENESIS'; // parametrize this !

pool.connect(function(err, client, done) {
    if(err) {
      return console.error('connexion error', err);
    }
    client.query("select * from questions where category  = ($1)", [category], function(err, result) {
      // call `done()` to release the client back to the pool
      done();
  
      if(err) {
        return console.error('error running query', err);
      }
      console.log(result.rows[0]['category'])
      console.log(result.rows)
      process.exit(0);
    });
});
module.exports = client
