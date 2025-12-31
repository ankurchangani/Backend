const express = require('express');

const app = express();

const userModules = require('./userModules');

const connectDB = require('./db/db');

connectDB();

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/createuser', async (req, res) => {
  try {
    
    const user = new userModules({
      name: 'ankur',
      email: 'ankur@123',
      username: 'ankur123',
    });

    await user.save();
    res.send(user);
  } catch (err) {
    res.status(500).send("User creation failed");
  }
});

app.get('/readuser', async (req, res) => {
  try {
    const user = await userModules.find();
    res.send(user);
  } catch (error) {
    res.status(500).send("Read failed");
  }
});

app.get('/updateuser', async (req, res) => {
  try {
    const updatedUser = await userModules.findOneAndUpdate(
      { username: 'ankur123' },
      { $set: { name: 'Ankur Changani' } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).send("User not found");
    }

    res.send(updatedUser);
  } catch (err) {
    res.status(500).send("Update failed");
  }
});

app.get('/deleteuser', async (req, res) => {
  try {
    const user = await userModules.findOneAndDelete({ username: "ankur123" });
    res.send(user);
  } catch (error) {
    res.status(500).send("Delete failed");
  }
});

app.listen(3000, () => {
  console.log('server is running on port 3000');
});
