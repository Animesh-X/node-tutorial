const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our HomePage')
    }
    else if (req.url === '/about'){
        res.end('Here is our short History')
    }
    else {res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back Home</a>
    `)
}
})

server.listen(3000)