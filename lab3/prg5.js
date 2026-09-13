import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { contentType: "application/json" });
  const product = {
    name: "Mobile",
    price: 2500,
    discount: "5%",
    company: "Realme",
  };
  res.end(JSON.stringify(product)); //to convert object to string we use JSON.stringify() method//res.end me sirf string hi pass kar sakte hai
});

server.listen(3000, () => {
  console.log("Server is running...");
});
