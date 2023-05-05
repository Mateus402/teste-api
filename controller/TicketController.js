const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'testeback',
    password: 'Mateus76',
    port: 5432
});

function getTickets(req, res) {
    
    pool.query('SELECT * FROM ticket', (error, results) => {
        if (error) {
            throw error
        } else {
            res.json(results.rows)
        }
    })
}

module.exports = {
    getTickets
}