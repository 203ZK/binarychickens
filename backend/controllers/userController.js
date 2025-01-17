const db = require("../db/queries");

async function getUserById(req, res) {
    const { user_id } = req.params;
    const users = await db.getUserByUserId(user_id);
    res.send({ users });
}

async function getMartItems(req, res) {
    const products = await db.getAllMartItems();
    res.send({ products });
}

async function getUserByName(req, res, username) {
    const users = await db.getUserByUsername(username);
    res.send({ users });
}

module.exports = {
    getUserById, getUserByName,
    getMartItems,
};