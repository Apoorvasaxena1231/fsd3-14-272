import http from 'http';
const server = http.createServer((req, res) => {
  
 if (req.url == "/") res.end("<h1>HOME PAGE</h1>");
 else if (req.url == "/about") res.end("<h2>ABOUT US PAGE</h2>");
 else if (req.url == "/product") res.end("<h1>Mobile phone </h1><h2> Price:</h2>");
else {
    res.statusCode=404;
    res.end(`<h1>404,NOT found </h1>
        <p>Page not found</p>
        <a href='/'>Home</a>`);
}

});
server.listen(4444, () => console.log("server is running"));
