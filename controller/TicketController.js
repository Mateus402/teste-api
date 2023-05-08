const { Connection } = require('pg')
const pool = require('../config/pgConfig')

 function getTickets(req, res) {
    const { ano, mes } = req.params
     pool.query(`SELECT * FROM ticket
     WHERE date_part('year', opening_date) = $1
       AND date_part('month', opening_date) = $2;`, [ano, mes], (error, results) => {
        if (error) {
           throw error
         } else {
            console.log(ano, mes)
            res.json(results.rows)
         }
       })
 }

 function setTickets(req, res) {
    const {title, opening_date, closing_date, fk_id_client, fk_id_module} = req.params
    pool.query(`INSERT INTO TICKET (TITLE, OPENING_DATE, CLOSING_DATE, FK_ID_CLIENT, FK_ID_MODULE) 
    VALUES ($1, $2, $3, $4, $5)`, [title, opening_date, closing_date, fk_id_client, fk_id_module], (error, results) => {
        if(error) {
            throw error
        }else {
            res.json(results.rows)
            console.log("Post realizado com sucesso")
        }
    })
 }

module.exports = {
    getTickets,
    setTickets
}