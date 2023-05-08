const express = require("express")

const router = require("./rotas/tickets")

const app = express()

const port = 3000


app.use('/api', router) 


app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`)
})