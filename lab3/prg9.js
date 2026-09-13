import { createReadStream } from "fs";
import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("content-type", "text/html");
    res.statusCode = 200;

    const stream = createReadStream("./airtag.html", {
      encoding: "utf-8",
    });

    stream.pipe(res);
  } else if (req.url === "/mobile") {
    res.writeHead(200, {
      "content-type": "application/json",
    });

    const stream = createReadStream("./product.json", {
      encoding: "utf-8",
    });

    stream.pipe(res);
  } else if (req.url === "/manual") {
    res.writeHead(200, {
      "content-type": "text/plain",
    });

    const stream = createReadStream("./chatgpt.txt", {
      encoding: "utf-8",
    });

    stream.pipe(res);
  } else {
    res.statusCode = 404;
    res.end("Not found");
  }
});

server.listen(3000, () => {
  console.log("PRG9 is running...");
});
