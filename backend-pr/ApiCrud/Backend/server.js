const express = require('express');
const connectDB = require('./db/db');
const dotenv = require("dotenv");
const cors = require('cors'); 

dotenv.config(); 

const app = express();
const port = process.env.PORT || 5000;
const userRouter = require('./Routers/UserRouter');


app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/', userRouter);


app.listen(port, async (err) => {
    await connectDB();
    if (!err) {
        console.log(`Server is running at http://localhost:${port}`);
    } else {
        console.error("Error starting server:", err);
    }
});
