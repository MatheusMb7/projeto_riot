const express = require('express')
const app = express()


const cors = require('cors')
app.use(cors())

app.use(express.json())

// LOG
app.use((req,res,next) =>{
    console.log("####### LOG de requisição ######")
    console.log("Time: ", new Date().toLocaleString())
    console.log("metodo: ", req.method)
    console.log("Rota: ", req.url)
    next()
})

// Roteadores
const agenteController = require('./routes/agenteController')
app.use(agenteController)

const armaController = require('./routes/armaController')
app.use(armaController)

const jogadorController = require('./routes/jogadorController')
app.use(jogadorController)

const mapaController = require('./routes/mapaController')
app.use(mapaController)

const partidaController = require('./routes/partidaController')
app.use(partidaController)

// executa
app.listen(3000, () => {
    console.log("Api rodando em http://localhost:3000")
})