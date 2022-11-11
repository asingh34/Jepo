const queries = require('../queries.js')
const fetch = require('node-fetch')

var assert = require('assert');

// test/server.js

var expect  = require("chai").expect;

describe("Queries API",  function() {


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

