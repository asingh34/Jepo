const queries = require('../queries.js')
const fetch = require('node-fetch')
const testConfig = require('./test-config.js').testConfig
const successCode = testConfig.successCode

var assert = require('assert');
var expect  = require("chai").expect;

//testing variables 
var testUserId = null;
//var testCreateName = null; 
//var testCreateEmail = null; 
var testIdarr = [];  


describe(`${successCode} Status`, async function(){

});

describe("Gets categories",  async function() {

    var conf = testConfig.cats.getCats
    var url = conf.url
    var len = conf.len

    it(`returns status ${successCode}`, async function() {
      const res = await fetch (url)
      expect(res.status).to.equal(successCode);
    });

    it(`returns ${len} cats`, async function() {
      const res = await fetch (url)
      const cats = await res.json()
      expect(cats.length).to.equal(len);
    });
});


describe("One random question with data",  async function() {//this includes all data for the question

  var conf = testConfig.cats.getRandom
  var url = conf.url
  var len = conf.len

  it(`returns status ${successCode}`, async function() {
    const res = await fetch (url)
    expect(res.status).to.equal(successCode);
  });

  it(`returns ${len} random question with data`, async function() {
    const res = await fetch (url)
    const rando = await res.json()
    expect(rando.length).to.equal(len);
  });
});

describe("One random question",  async function() {//this is for just one question no other data

  var conf = testConfig.question.getRandomQuestion
  var url = conf.url
  var len = conf.len

  it(`returns status ${successCode}`, async function() {
    const res = await fetch (url)
    expect(res.status).to.equal(successCode);
  });

  it(`returns ${len} random question`, async function() {
    const res = await fetch (url)
    const rando = await res.json()
    expect(rando.length).to.equal(len);
  });
});




describe ("Create Users", async function(){
  let conf = testConfig.users.createUser

 let url = conf.url
 let inputFile = testConfig.users.createUser.inputFile
 let inputPath = testConfig.getInputPath(inputFile)
 let data = testConfig.readJsonFile(inputPath)
 data.forEach( function(user) {
   it(`creates user ${user.name} from input file`, async function(){
     const testUrl = url + '?' + new URLSearchParams({
       name: user.name,
       email: user.email
     }).toString()

     const res = await(
       await fetch (testUrl)
     ).json()
     expect(res.length).to.equal(1)
     
   });
 })
});

describe("Get Users", async function(){
  var conf = testConfig.users.getUsers
  var url = conf.url
//console.log('get users url: ', url)
  it(`returns status ${successCode}`, async function(){
    const res = await fetch (url)
    expect(res.status).to.equal(successCode);
  });

  it("returns all users", async function(){
    const res = await fetch (url)
    const usrs = await res.json()
    expect(usrs.length > 0); // eventually the exact length  will be passed in thru config from the test data set. Until then we merely check for greater than zero
      console.log(usrs)
    if (usrs.length > 0) {
        let idx = conf.pickIndexFn(usrs)
        console.log('idx is:',idx)
        testUserId = usrs[idx].id
            console.log('testUserId: ', testUserId)
        }
  });
});

describe("getUserById",async function(){
    var conf = testConfig.users.getUserById
    var url = conf.url
    var len = conf.len

     console.log('get user by id url: ', url)
      it(`returns status ${successCode}`, async function(){
        const testUrl = url + '?' + new URLSearchParams({
              id: testUserId,
        }).toString()
        console.log('get user by id testurl: ', testUrl)
        const res = await fetch (testUrl)
        expect(res.status).to.equal(successCode);
      });

      it("returns user selected by ID", async function(){
          const testUrl = url + '?' + new URLSearchParams({
              id: testUserId,
          }).toString()

        // to get the returned data, we need to call .json() method upon response object as a second async call
        // this is why we have two nested awaits
        const res = await (
          await fetch (testUrl)
        ).json()
        expect(res.length).to.equal(len);
          /*
        if (res.length == 1) { 
            expect(res[0].id).to.equal(testUserId);
        }
          */
      });
});

describe("Delete user by id ", async function(){
    let conf = testConfig.users.deleteCreatedUsers
    let url = conf.url

    // use the same users dataset as that by createUsers
    let inputFile = testConfig.users.createUser.inputFile
    let inputPath = testConfig.getInputPath(inputFile)
    let data = testConfig.readJsonFile(inputPath)
    data.forEach( function(user) {
        it(`deletes user ${user.name} from the database`, async function(){
         const testUrl = url + '?' + new URLSearchParams({
           name: user.name,
         }).toString()

         const res = await(
           await fetch (testUrl)
         ).json()
         expect(res.length).to.equal(1)
         
        });
    })


});

