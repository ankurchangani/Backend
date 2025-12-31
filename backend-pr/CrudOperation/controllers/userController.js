const User = require("../module/user");

exports.showAddForm = (req, res) => {
  res.render("index");
};

exports.showUserTable = async (req, res) => {
  const users = await User.find();
  res.render("view", { users });
};

exports.addUser = async (req, res) => {
  const { name, email, password } = req.body;
  await User.create({ name, email, password });
  res.redirect("/users");
};

exports.getEditUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render("edit", { user });
};

exports.updateUser = async (req, res) => {
  const { name, email, password } = req.body;
  await User.findByIdAndUpdate(req.params.id, { name, email, password });
  res.redirect("/users");
};

exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.redirect("/users");
};
