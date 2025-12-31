const express = require("express");
const app = express();
const path = require('path');
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  fs.readdir("./files", (err, files) => {
    res.render("index", { files: files });
  });
});

app.get("/file/:fileName", (req, res) => {
  const filePath = path.join(__dirname, "files", req.params.fileName);
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(404).send("File not found");
    }
    res.render("show", {
      fileName: req.params.fileName,
      fileContent: data
    });
  });
});

app.post("/create", (req, res) => {
  fs.writeFile(`./files/${req.body.title.split(" ").join("")}.txt`, req.body.details, (err) => {
    res.redirect("/");
  });
});

app.get('/edit/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  res.render('edit', { fileName });
});

app.post('/edit', (req, res) => {
  const prev = req.body.previous;
  const updated = req.body.new;
  fs.rename(`./files/${prev}.txt`, `./files/${updated}.txt`, (err) => {
    if (err) {
      return res.status(500).send("Something went wrong.");
    }
    res.redirect('/');
  });
});

app.get('/delete/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  fs.unlink(`./files/${fileName}`, (err) => {
    if (err) {
      return res.status(500).send("Something went wrong.");
    }
    res.redirect('/');
  });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
