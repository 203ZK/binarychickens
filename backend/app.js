const express = require('express');
const app = express();
const cors = require("cors");
const db = require("./db/queries");

app.use(express.json());
app.use(cors());

async function getAllUsers(res) {
    const users = await db.getUsers();
    res.send({ users });
}

app.get('/', (req, res) => getAllUsers(res));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});