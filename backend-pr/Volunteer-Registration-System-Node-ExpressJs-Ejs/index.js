const express = require("express");

const fs = require("fs");

const path = require("path");

const app = express();

const bodyParser = require("body-parser");

const port = 3001;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

let localData = [];

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/register", (req, res) => {
    res.render("index", { localData });
});

app.post("/add", (req, res) => {
    const { name, email, phone, skills } = req.body;

    const obj = {
        name,
        email,
        phone,
        skills,
        id: Math.floor(Math.random() * 10000),
    };

    localData.push(obj);
    fs.appendFileSync("log/log.txt", `${JSON.stringify(obj)}\n`);

    console.log("Emp Successfully added");

    res.redirect("/register");
});

app.get("/update/:id", (req, res) => {
    const item = localData.find((item) => item.id == req.params.id);

    res.render("edit", { item });
});

app.post("/update/:id", (req, res) => {
    const id = req.params.id;

    const updatedData = req.body;

    localData = localData.map((item) =>
        item.id == id ? { ...item, ...updatedData } : item
    );

    console.log("Emp updated");

    res.redirect("/register");
});

app.get("/delete/:id", (req, res) => {
    localData = localData.filter((item) => item.id != req.params.id);

    console.log("Emp Deleted");

    res.redirect("/register");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    
    fs.writeFile("log/log.txt", "", () => console.log("Log file cleared"));
});
