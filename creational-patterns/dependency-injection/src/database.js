class Database {
    query(sql) {
        console.log(`Executing query in database: ${sql}`);
        return Promise.resolve({id: 1, name: "John Doe"})
    }
}

module.exports = Database;