const pool = require('../config/pgConfig')


 function getTickets(req, res) {
  console.log('teste')
     // const { ano, mes } = req.params
     
     //const query = `SELECT * FROM ticket`
       const retorno = pool.query(`SELECT * FROM ticket`, (error, results) => {
        if (error) {
          throw error;
        } else {
          res.json(results.rows);
        }
       })
       } //, [ano, mes]
       //const tickets = result.rows
    //    res.json(retorno.rows)
    //  } catch (error) {
    //    console.error(error)
    //    res.status(500).json({ error: 'Erro ao buscar tickets' })
    //  }
 


// function getTickets(req, res) {
//     const mes = req.params.mes
//     const ano = req.params.ano
//     const results = pool.query('SELECT * FROM ticket WHERE extract(MONTH FROM opening_date) = $1 AND extract(YEAR FROM opening_date) = $2', [mes, ano], (error, results) => {
//         if (error) {
//           throw error
//         }
//         res.json(results.rows)
//       })
// }

module.exports = {
    getTickets
}