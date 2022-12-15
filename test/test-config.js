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
    }
    
}

function baseUrl () {
    return testUrlConfig.scheme + testUrlConfig.host + ':' + testUrlConfig.port
}

module.exports = {
    testConfig: testConfig,
}