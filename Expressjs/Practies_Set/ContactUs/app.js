const express = require("express");
const app = express();

const PORT = 3002;

app.use((req, res, next) => {
    console.log("Middleware 1", req.method, req.url);
    next();
});

app.use((req, res, next) => {
    console.log("Middleware 2", req.method, req.url);
    next();
});

app.use((req, res, next) => {
    console.log("Middleware 3", req.method, req.url);
    next(); 
});

app.get("/", (req, res, next) => {
    console.log("Handling / for GET", req.method, req.url);
    res.send(`<h1>Home Page</h1>`);
});

app.get("/about", (req, res, next) => {
    console.log("Handling /about for GET", req.method, req.url);
    res.send(`<h1>About page</h1>`);
});

app.listen(PORT, () => {
    console.log(`Server is running on address http://localhost:${PORT}`);
});
