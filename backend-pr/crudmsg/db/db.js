const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://changaniankur:XKW8DyLcvX8sHHhr@cluster0.krk3pra.mongodb.net/crudmsg" , {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Database connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB