const { Router } = require("express")
const { getTickets } = require("../controller/TicketController")

const router = Router()

router.get('/tickets/:ano/:mes', getTickets);
 
module.exports = router