const mongoose = require('mongoose');

const connectDB = async () => {
    const url = "mongodb+srv://changaniankur:5oXTvsovM6jgS1Xg@cluster0.8wnz8ma.mongodb.net/apicrud";

    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ MongoDB Connected');
    } catch (err) {
        console.error('❌ MongoDB connection error:', err.message);
    }
};

module.exports = connectDB;
