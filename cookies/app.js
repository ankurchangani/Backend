const express = require("express");

const jwt = require("jsonwebtoken");

const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());

app.get("/", (req, res) => {
  jwt.sign({ name: "ankur" }, "ankurchangani", function (err, token) {
    if (err) return res.status(500).send("Token generation failed");
    
   
    res.cookie("token", token, {
      httpOnly: true,  
      maxAge: 24 * 60 * 60 * 1000, 
      secure: true  
    });

    res.send("Token generated and stored in cookie");
  });
});

app.get("/read", (req, res) => {
  const token = req.cookies.token;

  res.send("Token from cookie: " + token);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
