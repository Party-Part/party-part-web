const openapi = require('openapi-client')
openapi.genCode({
    src: 'https://github.com/Party-Part/party-part-service/blob/main/open-api/swagger.json',
    outDir: './src/service',
    language: 'js',
    redux: false
})
    .then(complete, error)

function complete(spec) {
    console.info('Service generation complete')
}

function error(e) {
    console.error(e.toString())
}