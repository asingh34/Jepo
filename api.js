//creating connection 
const client = require('./connection.js')
const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.log("Sever is now listening at port 3000");
})

client.connect();


//json parser 
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//retrieve all questions 
app.get('/questions', (req, res)=>{
    client.query(`Select * from questions`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
client.connect();


//retrieve questions by category 
app.get('/questions/:category', (req, res)=>{
    client.query(`select * from questions where category=${req.params.category}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
client.connect();

//select 5 random categories




//adding a new question to the table 
app.post('/questions', (req, res)=> {
    const question = req.body;
    let insertQuery = `insert into questions(shownumber,airdate,round,category,value,question,answer) 
                       values(${questions.shownumber}, '${questions.airdate}', '${questions.round}', '${questions.category}','${questions.value}','${questions.question}','${questions.answer}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

//deleting a whole category from of qustions from the table
app.delete('/questions/:category', (req, res)=> {
    let insertQuery = `delete from users where category=${req.params.category}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})





