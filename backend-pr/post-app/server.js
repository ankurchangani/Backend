const express =  require('express');
const mogoose = require('mongoose');
const dotenv = require('dotenv');
const cokkieParser = require('cookie-parser');
const parth = require('path');
const authRouter = require('./routes/authRoutes');
const postRouter = require('./routes/postRoutes');

dotenv.config();
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cokkieParser());

app.set('view engine', 'ejs');
app.set('views', parth.join(__dirname, 'views'));

app.use(express.static(parth.join(__dirname, 'public')));


app.get("/" , (req, res) => {
  res.render('register');
});


app.use("/" , authRouter);
app.use("/posts" , postRouter);

mogoose.connect(process.env.MONGO_URI)
.then(() => {
  app.listen(process.env.PORT, () => {
    console.log("server is running on port " , process.env.PORT);
  })
})
.catch((err) => {
  console.log(err);
})