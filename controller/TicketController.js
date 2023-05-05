const pool = require('../config/pgConfig')


// function getTickets(req, res) {
//     // const { ano, mes } = req.params
//     try {
//     //const query = `SELECT * FROM ticket`
//       const result = pool.query(`SELECT * FROM ticket`) //, [ano, mes]
//       //const tickets = result.rows
//       res.json(result.rows)
//     } catch (error) {
//       console.error(error)
//       res.status(500).json({ error: 'Erro ao buscar tickets' })
//     }
// }


function getTickets(req, res) {

    const {ano, mes} = req.params
    pool.query('SELECT * FROM ticket WHERE extract(MONTH FROM opening_date) = $1 AND extract(YEAR FROM opening_date) = $2', [ano, mes], (error, results) => {
        if (error) {
          throw error
        }
        res.json(results.rows)
      })
}

module.exports = {
    getTickets
}