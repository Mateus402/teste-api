const { Router } = require("express")
const { getTickets } = require("../controller/TicketController")

const router = Router({mergeParams: true })

router.get('/', getTickets);

module.exports = router