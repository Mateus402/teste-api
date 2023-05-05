const express = require("express")

const routerTicket = require("./rotas/tickets")

const app = express()

const port = 3000


app.use('/tickets/:ano/:mes', routerTicket) 


app.listen(port, () => {
    console.log(`Server on port ${port}`)
})