const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const connectDB = require('./db/connect');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const path = require('path');

dotenv.config();
const app = express();
connectDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.use('/', authRoutes);

app.use('/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
