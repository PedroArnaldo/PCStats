const http = require('http');
const host = 'http://localhost';
const port = 3000;
const stats = require('./pcRamUsage.js');

http.createServer((req, res) => {

    let url = req.url;

    if(url === '/stats'){
        res.write('<a href="/">Home</a>');
        res.write('</br>')
        res.end(JSON.stringify(stats, null, 2));
    }
    else{
        res.write('<h1>PC Stats</h1>');
        res.end('<a href="/stats"> Stats </a>');
    }

    
}).listen(port, () => console.log(`Server is running in ${host}:${port}`));