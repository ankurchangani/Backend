const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const bodyParser = require("body-parser");
const connectDB = require("./db/db");


dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

connectDB();

app.use(express.static(path.join(__dirname, "views")));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
