const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.res)
    res.writeHead(200, { 'Content-Type': 'text/html' })
    return res.end('<h1 style="color:red ; text-align:center">Hello world</h1>')

})

const PORT = 3001

server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})

