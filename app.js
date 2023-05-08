const express = require("express")

const router = require("./rotas/tickets")
const routerPost = require("./rotas/ticketPost")

const app = express()

const port = 3000


app.use('/tickets/:ano/:mes', router) 

app.use('/add/:title/:opening_date/:closing_date/:fk_id_client/:fk_id_module', routerPost)


app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`)
})