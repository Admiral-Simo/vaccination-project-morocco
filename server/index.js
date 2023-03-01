const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { getArticles, login, createArticle } = require("./middlewares/db");
const authMiddleware = require("./middlewares/authMiddleware");
app.use(bodyParser.json());

app.get("/articles", (req, res) => {
  const articles = getArticles();
  res.send(articles);
});

app.post("/articles", authMiddleware, (req, res) => {
  if (!req.body.title || !req.user) return res.end('please provide a title');
  const article = createArticle(req.body.title, req.user);
  res.send(article);
});

app.post("/login", (req, res) => {
  const user = login(req.body.username, req.body.password);
  if (!user) {
    return res.status(422).json({ error: "Incorrect email or password" });
  }
  res.send(user);
});

app.listen(5000, () => {
  console.log("server started");
});
