const express = require("express")

const routerTicket = require("./rotas/tickets")

const app = express()

const port = 8000


app.use('/tickets', routerTicket)


app.listen(port, () => {
    console.log(`Server on port ${port}`)
})