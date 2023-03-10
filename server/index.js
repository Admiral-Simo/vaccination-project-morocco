const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const { getArticles, login, createArticle } = require("./middlewares/db");
const authMiddleware = require("./middlewares/authMiddleware");
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
const db = require("./connect");

app.get("/children", (req, res) => {
  const GetChildrenQuery = "SELECT * FROM children";
  db.query(GetChildrenQuery, (err, result) => res.send(result));
});

app.get("/sex-stats", (req, res) => {
  const query = `select
  count(case when sex='m' then 1 end) as male_cnt,
  count(case when sex='f' then 1 end) as female_cnt,
  count(*) as total_cnt
from children`;
  db.query(query, (err, result) => res.send(result[0]));
});

app.listen(5000, () => {
  console.log("server started");
});
