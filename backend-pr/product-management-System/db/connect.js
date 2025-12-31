import mongoose from "mongoose";


const connectDB = async (url) => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("db is connected");
        console.log("mongodb is connected", conn.connection.host);
    } catch (error) {
        console.log("mongodb connect err", err.message);
        process.exit(1);
    }
}

export default connectDB;