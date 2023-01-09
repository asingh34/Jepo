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
    path: './test/data/testUsers.json'
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
            url: baseUrl() + '/createUser',
            len: 1
        }
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