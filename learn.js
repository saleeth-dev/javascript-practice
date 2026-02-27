let user = "Saleeth";
let age = 20;

const square = (n) => n * n;

console.log(`User: ${user}`);
console.log(`Age next year: ${age + 1}`);
console.log(`Square of 4 is ${square(4)}`);

function add(a, b) {
    return a + b;
}

n = 5
m = n * n;
console.log(`square of 5 is ${m}`);

const double = (n) => n * n;

console.log(`Square of 4 is ${double(4)}`);

// this is practiece section

const http = require("http");

const server = http.createServer((req, res) => {

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to My Node Server 🚀");
  }

  else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is About Page");
  }

  else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      name: "Saleeth",
      role: "Full Stack Student",
      status: "Learning Node.js"
    }));
  }

  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found ❌");
  }

});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
