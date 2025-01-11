const pool = require("./pool");

async function getUsers() {
    const { rows } = await pool.query("SELECT * FROM users");
    return rows;
}

module.exports = { getUsers };