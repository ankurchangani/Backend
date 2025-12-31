const express = require('express')
const app = express()
const session = require('express-session');
const passport = require('passport');
const db = require('./config/DB');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();
const port = process.env.PORT || 3000;

// routes 


app.use(express.json())

app.set('view engine', 'ejs');

app.use(session({
    secret: 'Auth',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
    res.render("index");
});


app.listen(port, () => {
    db();
    console.log(`Server Is Started At http://localhost:${port}`);
});
