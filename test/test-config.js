const { getRandom } = require("../queries")
const path = require('path')
const fs = require('fs')


const testUrlConfig = {
    scheme: 'http://',
    host: 'localhost',
    port: '3000',
    successCode: 200,
}

const inputConfig = {
    path: './test/data/'
}


const testConfig = {
    baseUrl: baseUrl,
    getInputPath: getInputPath, 
    readJsonFile: readJsonFile, 

    successCode: testUrlConfig.successCode,
    cats: {
        getCats: {
            url: baseUrl() + '/getCats',
            len: 5
        },
        
        getRandom: {
            url: baseUrl() + '/getRandom', 
            len: 1
        }
    },
    question:{
        getRandomQuestion: {
            url: baseUrl() +'/getRandomQuestion',
            len : 1
        }
    },

    users: {
        getUsers: {
            url: baseUrl() + '/getUsers',
            pickIndexFn: function (res) {
                let result = 0
                if (res.length > 2) {
                    result = parseInt(res.length / 2)
                }
                return result
            }
        },
        getUserById: {
            url: baseUrl() + '/getUserById',
            len: 1
        }, 
        createUser: {
            inputFile: 'testUsers.json',
            url: baseUrl() + '/createUser',
        },
        // this test deletes all users created from inputFile by createUser
        // thus, the inputFile for createUsers must provide names which are guaranteed unique and not present already in the database
        // we use __TestUser1__ etc. 
        //
        // one alternative way to do this would have been to store id's of users as they are created and use them for the delete test
        // but this would leave the test fragile because if any one test broke we may end up with a dirty database
        // with a names based approach we can clean up the database easily even if things break
        //
        // Alas nothing is free, so this logical names based approach does not test if all uuid's were created properly.
        // Only getUserById tests whether users got id's at all during creation, and that for just one user
        //
        deleteCreatedUsers: {
            url: baseUrl() + '/deleteUser',            
        }
        //ADD DELET USER CONFIG HERE 
    }
}

function baseUrl () {
    return testUrlConfig.scheme + testUrlConfig.host + ':' + testUrlConfig.port
}
function getInputPath(filename){
    console.log('getInputPath:',filename)
    let result = path.join(inputConfig.path, filename)
    console.log('getInputPath returns: ',result)
    return result
}

function readJsonFile(path){
    const jsonStr = fs.readFileSync(path)
    const data = JSON.parse(jsonStr)
    return data
}

module.exports = {
    testConfig: testConfig,
}