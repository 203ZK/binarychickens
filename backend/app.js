require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const db = require("./db/queries");

app.use(express.json());
app.use(cors());

async function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const authToken = authHeader && authHeader.split(" ")[1];

  if (authToken == null) {
    res.sendStatus(401);
  }
  jwt.verify(authToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}

app.get("/api/transactions", authenticateToken, async (req, res) => {
  const user = req.user;
  const transactions = await db.getTransactions();
  const userTransactions = transactions.filter((trxn) => {
    return trxn.user_id == user;
  });
  res.send(userTransactions);
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const users = await db.getUsers();
  const user = users.find((u) => {
    return u.user_name === username;
  });

  if (user) {
    const accessToken = jwt.sign(user.user_id, process.env.ACCESS_TOKEN_SECRET);
    res.json({
      username: user.user_name,
      accessToken: accessToken
    });
  } else {
    res.sendStatus(403);
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});