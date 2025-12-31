const User = require('../models/User');
const bcrypt =  require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.getRegister = (req, res) => {
  res.render('register');
}

exports.getLogin = (req, res) => {
  res.render('login');
}

exports.postRegister = async (req, res) => {
  const { username, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.send("Email already registered. Try logging in.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    username,
    email,
    password: hashedPassword
  });

  await user.save();
  res.redirect("/login");
};


exports.postLogin = async (req , res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if(!user){
    return res.send("user not found");
  }

  const isMatch = await bcrypt.compare(password , user.password);

  if(!isMatch){
    return res.send("Invalid credentials");
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

   res.cookie("token", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, 
  });

  res.redirect("/posts");
}


exports.logout = (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
}
