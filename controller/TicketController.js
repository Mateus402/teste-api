const pool = require('../config/pgConfig')


//  function getTickets(req, res) {
//   console.log('teste')
//      // const { ano, mes } = req.params
     
//      //const query = `SELECT * FROM ticket`
//        const retorno = pool.query(`SELECT * FROM ticket`, (error, results) => {
//         if (error) {
//           throw error;
//         } else {
//           res.json(results.rows);
//         }
//        })
       //}, [ano, mes]
       //const tickets = result.rows
    //    res.json(retorno.rows)
    //  } catch (error) {
    //    console.error(error)
    //    res.status(500).json({ error: 'Erro ao buscar tickets' })
    //  }
 


 function getTickets(req, res) {
    const { ano, mes } = req.params
    //  const mes = req.params.mes
    //  const ano = req.params.ano
     pool.query(`SELECT * FROM ticket
     WHERE date_part('year', opening_date) = $1
       AND date_part('month', opening_date) = $2;`, [ano, mes], (error, results) => {
        if (error) {
           throw error
         } else {
            console.log(results)
            res.json(results.rows)
         }
       })
 }

module.exports = {
    getTickets
}