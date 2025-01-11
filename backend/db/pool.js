const { Pool } = require("pg");

module.exports = new Pool({
    host: "localhost",
    user: "postgres",
    database: "test1",
    password: "stama92(6)POSTGRESQL",
    port: 5432
});