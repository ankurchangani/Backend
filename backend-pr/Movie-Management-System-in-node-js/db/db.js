const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://changaniankur:HlcuidsjEXeuA8VA@cluster0.rhsj9un.mongodb.net/film-archive").then(() => {
    console.log("db is connected");
}).catch((err) => {
    console.log("err", err);
})

module.exports = mongoose