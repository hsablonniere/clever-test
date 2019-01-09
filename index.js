const http = require('http')

const server = http.createServer(function (req, res) {
  res.end('PONG')
})

setInterval(() => {
	console.log('some logs', new Date())
}, 500)


server.listen(process.env.PORT)
