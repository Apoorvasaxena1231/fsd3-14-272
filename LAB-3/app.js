import http from "http";
const server = http.createServer((res,res)=>{
    res.end("<h2> welcome to server side </h2>");
});

server.listen(5000, () => {
  console.log("server is running");
});
