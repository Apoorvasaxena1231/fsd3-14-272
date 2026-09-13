import http from 'http';
const server = http.createServer((req, res) => {
  
 if (req.url == "/cart") res.end("<h1>product PAGE</h1>");
 else if (req.url == "/checkout") res.end("<h2>checkout PAGE</h2>");
 else if (req.url == "/product") res.end("<h1>product page </h1><h2> Price:</h2>");
else {
    res.statusCode=404;
    res.end(`<h1>404,NOT found </h1>
        <p>Page not found</p>
        `);
}

});
server.listen(3000, () => console.log("server is running"));
