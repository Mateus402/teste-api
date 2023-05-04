const { Router } = require("express")
const { Pool } = require('pg')

const router = Router()

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'Mateus76',
    port: 5432
});

router.get('/', (req, res) => {
    res.send("Chegou aqui")
    pool.query('SELECT * FROM aluno', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
})

module.exports = router