const { Router } = require("express")
const { setTickets } = require("../controller/TicketController")

const router = Router({mergeParams: true })

router.post('/', setTickets);

 
module.exports = router