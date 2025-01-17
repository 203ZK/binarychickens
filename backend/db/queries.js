// Always returns an ARRAY

const pool = require("./pool");

async function getUsers() {
    const { rows } = await pool.query("SELECT * FROM users");
    return rows;
}

async function getUserByUserId(userId) {
    const { rows } = await pool.query(
        "SELECT * FROM users WHERE user_id = $1", [userId]
    );
    return rows;
}

async function getUserByUsername(username) {
    const { rows } = await pool.query(
        "SELECT * FROM users WHERE user_name = $1", [username]
    );
    return rows;
}

async function getAllMartItems() {
    const { rows } = await pool.query("SELECT * FROM products");
    return rows;
}

async function getTransactions() {
    const { rows } = await pool.query("SELECT * FROM transactions");
    return rows;
}

module.exports = { 
    getUsers, 
    getAllMartItems,
    getTransactions
};