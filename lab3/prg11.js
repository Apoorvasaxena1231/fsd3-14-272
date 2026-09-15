import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.end("Home Page");
  } else if (req.url === "/product" && req.method === "GET") {
    const products=[
        {
    "id": 1,
    "brand": "Apple",
    "model": "iPhone 16",
    },

     {
    "id": 2,
    "brand": "Samsung",
    "model": "Galaxy S25",
     },
    ];

    res.end(JSON.stringify(products));

    
    
  } else if (req.url === "/product" && req.method === "POST") {

    let body ;
    req.on("data",(chunk)=>{
    body+=chunk
  })
  res.on("end",()=>{
    const product =JSON.parse(body);
    res.writable
  })
    res.end("Add Product");
  } else if (req.url === "/product" && req.method === "PUT") {
    res.end("Update Product");
  } else if (req.url === "/product" && req.method === "DELETE") {
    res.end("Remove Product");
  } else {
    res.statusCode = 404;
    res.end("Page Not Found");
  }
});

server.listen(3001, () => {
  console.log("prg11 is running on port 3001");
});
//prg11