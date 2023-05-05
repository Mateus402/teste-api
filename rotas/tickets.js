const { Router } = require("express")
const { getTickets } = require("../controller/TicketController")

const router = Router()

router.get('/', getTickets);
 
module.exports = router