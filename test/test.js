const queries = require('../queries.js')
const fetch = require('node-fetch')

var assert = require('assert');

//test/server.js

var expect  = require("chai").expect;

describe("200 Status", function(){

});

describe("Gets categories",  function() {

    var url = "http://localhost:3000/getCats";

    it("returns status 200", async function() {
      const res = await fetch (url)
      expect(res.status).to.equal(200);
    });

    it("returns 5 cats", async function() {
      const res = await fetch (url)
      const cats = await res.json()
      expect(cats.length).to.equal(5);
    });


});
describe("One question",  function() {

  var url = "http://localhost:3000/getRandom";

  it("returns status 200", async function() {
    const res = await fetch (url)
    expect(res.status).to.equal(200);
  });

  it("returns 1 question", async function() {
    const res = await fetch (url)
    const rando = await res.json()
    expect(rando.length).to.equal(1);
  });

});
describe("Get Users", function(){
  var url = "http://localhost:3000/getUsers"

  it("returns status 200", async function(){
    const res = await fetch (url)
    expect(res.status).to.equal(200);
  });

  it("returns all users",async function(){
    const res = await fetch (url)
    const usrs = await res.json()
    expect(usrs.length).to.equal(0);//how to check dynamically
  });
});

