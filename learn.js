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
    res.end("Welcome to My Node Server ");
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
    res.end("Page Not Found ");
  }

});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

// Question-1

const num = [2, 4, 6, 8];
const square = num.map(n => n * n);
console.log(square);

// Question-2

const num2 = [1,2,3,4,5,6,7,8];
const even = num2.filter(n => n%2 === 0);
console.log(even);

// Question-3   

const total = [10,20,30,40].reduce((acc, curr) => acc + curr, 0);
console.log(total);

// Question-4
const calculate = (operation, a, b) => {
    return operation(a, b);
};
console.log(calculate((x, y) => x + y, 5, 3)); // Output: 8

// Question-5
function factorial(n) {
    if (n === 0|| n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// Question-6
class student {
    constructor(name, course) {
        this.name = Saleeth;
        this.course = ai&ml;
    }

    getDetails() {
        return `Name: ${this.name}, Course: ${this.course}`;
    }
}

// Question-7
const user={
 name:"Saleeth",
 age:20
}
const {name, age} = user;
console.log(name);
console.log(age);

// Question-8
const frontend=["HTML","CSS"];
const backend=["Node","Express"];

const fullstack=[...frontend,...backend];
console.log(fullstack);

// Question-9
function multiply(a,b){
    return(a * b);
}
console.log(multiply(5,3)); // Output: 15

// Question-10
const products=[
 {name:"Laptop",price:50000},
 {name:"Mouse",price:500},
 {name:"Phone",price:30000}
];

const above1000 = products.filter(product => product.price > 1000);
console.log(above1000);

const productNames = products.map(product => product.name);
console.log(productNames);

const totalPrice = products.reduce((acc, product) => acc + product.price, 0);   
console.log(totalPrice);

// Question-11

const nums = [5, 10, 3, 25, 8];

const max = nums.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
});
console.log(max);

// Q-1
(function(){
   // code
   console.log("Welcome to Frontend Advanced");
})();

// Q-2

class Person {
    constructor (name){
        this.name = name;
    }

    great(){
        console.log(`Hello, I am ${this.name}`);
    }
}
const Person1 = new Person("John");
console.log(Person1.great());

// Q-3
function sumAll(...numbers){
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15   
console.log(sumAll(10, 20, 30)); // Output: 60

// Q-4
const greet = function() {
    console.log("Hello Saleeth");
};

function execute(func) {
    func();
}

execute(greet);
