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

app.get("/dashboard-stats", (req, res) => {
  // average_done
  const q =
    "select average_done / (select count(*) as total_cnt from children) from (SELECT SUM(CASE WHEN `BCG_HB_VPO_vitD` IS NOT NULL THEN 1 ELSE 0 END + CASE WHEN `penta1` IS NOT NULL THEN 1 ELSE 0 END + CASE WHEN `penta2` IS NOT NULL THEN 1 ELSE 0 END + CASE WHEN `penta3` IS NOT NULL THEN 1 ELSE 0 END + CASE WHEN `vitD_vitA` IS NOT NULL THEN 1 ELSE 0 END + CASE WHEN `RR` IS NOT NULL THEN 1 ELSE 0 END + CASE WHEN `pneumo3` IS NOT NULL THEN 1 ELSE 0 END + CASE WHEN `DTC_RR_VPO_vitA` IS NOT NULL THEN 1 ELSE 0 END + CASE WHEN `DTC_VPO` IS NOT NULL THEN 1 ELSE 0 END) AS average_done FROM children) t1";

  const query =
    "select average_done, t2.* from (SELECT SUM(CASE WHEN `BCG_HB_VPO_vitD` IS NOT NULL THEN 1 ELSE 0 END + CASE WHEN `penta1` IS NOT NULL THEN 1 ELSE 0 END + CASE WHEN `penta2` IS NOT NULL THEN 1 ELSE 0 END + CASE WHEN `penta3` IS NOT NULL THEN 1 ELSE 0 END + CASE WHEN `vitD_vitA` IS NOT NULL THEN 1 ELSE 0 END + CASE WHEN `RR` IS NOT NULL THEN 1 ELSE 0 END + CASE WHEN `pneumo3` IS NOT NULL THEN 1 ELSE 0 END + CASE WHEN `DTC_RR_VPO_vitA` IS NOT NULL THEN 1 ELSE 0 END + CASE WHEN `DTC_VPO` IS NOT NULL THEN 1 ELSE 0 END) / (select count(*) as total_cnt from children) AS average_done FROM children) t1 CROSS JOIN (SELECT AVG(DATEDIFF(CURDATE(), birthday) / 365) AS average_age FROM children) t2;";
  db.query(query, (err, result) => res.send(result[0]));
});

app.listen(5000, () => {
  console.log("server started");
});
