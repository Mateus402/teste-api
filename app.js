const express = require("express")

const routerAluno = require("./rotas/aluno")

const app = express()

const port = 8000



app.use('/aluno', routerAluno)





app.listen(port, () => {
    console.log(`Server on port ${port}`)
})