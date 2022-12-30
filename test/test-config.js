const testUrlConfig = {
    scheme: 'http://',
    host: 'localhost',
    port: '3000',
    successCode: 200,
}

const testConfig = {
    baseUrl: baseUrl,
    successCode: testUrlConfig.successCode,
    cats: {
        getCats: {
            url: baseUrl() + '/getCats',
            len: 5
        }
    },
    users: {
        getUsers: {
            url: baseUrl() + '/getUsers',
            pickIndexFn: function (res) {
                let result = 0
                if (res.length > 2) {
                    result = res.length / 2
                }
                return result
            }
        },
        getUserById: {
            url: baseUrl() + '/getUserById',
        }
    }
}

function baseUrl () {
    return testUrlConfig.scheme + testUrlConfig.host + ':' + testUrlConfig.port
}

module.exports = {
    testConfig: testConfig,
}