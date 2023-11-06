var http = require('http');

var server = http.createServer(function(req, res) {
    console.log('ktoś wszedł na serwer');   
    res.write('<title>Node</title>')   
    res.end('<h1>Hello Node!</h1>')
});
server.listen(3000, () =>
{
    console.log('Serwer uruchomiony na porcie 3000')
});