const mongoose = require('mongoose'); 

const connectDB  = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
         console.log("db is connected");
        console.log("mongodb is connected", conn.connection.host);
    } catch (error) {
        console.log("mongodb connect err", err.message);
        process.exit(1);
    }
}

module.exports = connectDB