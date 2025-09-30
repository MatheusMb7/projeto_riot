const express = require('express')
const router = express.Router()

let jogadores = [
    {
      id: 1,
      user: "Migao",
      nivel: 101,
      agenteFavorito: "breach",
      rank: "prata 1"
    },
    {
      id: 2,
      user: "Dev7",
      nivel: 77,
      agenteFavorito: "Omen",
      rank: "Ouro 1"
    },
    {
      id: 3,
      user: "Firminoira",
      nivel: 44,
      agenteFavorito: "Neon",
      rank: "Ferro 3"
    },
    {
      id: 4,
      user: "AleNigga",
      nivel: 22,
      agenteFavorito: "Harbor",
      rank: "bronze 1"
    },
    {
      id: 5,
      user: "Spooknimoy",
      nivel: 365,
      agenteFavorito: "Raze",
      rank: "ascendente 3"
    }
  ]
  

router.post('/jogadores', (req, res, next) => {
const {user, nivel, agenteFavorito, rank} = req.body

if(!user || !nivel || !agenteFavorito || !rank)    {
    return res.status(400).json({error: "user, niveln Agente favorito e rank são obrigatorios"})
}

const jogador = jogadores.find (jogador => jogador.user== user)
if(jogador){
    return res.status(409).json({error: "nome já cadastrado"})
}
// cadastrar o novo jogador na lista
const novoJogador = {
    id: Date.now(),
    user,
    nivel, 
    agenteFavorito,
    rank
}
// inserir o novo jogador montada na lista
jogadores.push(novoJogador)
res.status(201).json({message: "Jogador Cadastrado!!!!", novoJogador})

})

// Listar todos
// - GET /jogador
router.get('/jogadores', (req, res, next) => {
    res.json(jogadores)
})

// Buscar um
// - GET /jogadores/{id}
router.get('/jogadores/:id', (req, res, next) => {
    const idRecebido = req.params.id
    const jogador = jogadores.find(jogador => jogador.id == idRecebido)
    if(!jogador) {
        return res.status(404).json({error: "Jogadornão encontrado!!!" })
    } 
    res.json(jogador)

})

// atualizar
// - PUT /jogadores/{id}
router.put('/jogadores/:id', (req, res, next) => {
    const { user, nivel, agenteFavorito, rank} = req.body
if(!user || !nivel || !agenteFavorito|| !rank ){
    return res.status(400).json({error: "nivel, agente favorito e rank são obrigatorios"})
}
// validar se o mapa com aquele ID existe na lista
const idRecebido = req.params.id
const jogador = jogadores.find(jogador => jogador.id == idRecebido)
if(!jogador){
    return res.status(404).json({error: "Jogador não encontrado"})
}
// sobreescreve os dados dos Mapa pra atualizar
jogador.user = user
jogador.nivel = nivel
jogador.agenteFavorito = agenteFavorito
jogador.rank = rank
res.json({message: "Jogador atualizado com sucesso"})
})

// deletar
// - DELETE /mapa/{id}
router.delete('/jogadores/:id', (req, res, next) => {
    const idRecebido = req.params.id
    const jogador = jogadores.find(jogador => jogador.id == idRecebido)
    if (!jogador) {
        return res.status(404).json({error:"Jogador não encontrado"})
    }
    jogadores = jogadores.filter(jogador => jogador.id != idRecebido)

    res.json({message: "Jogador excluido com sucesso"})
})



module.exports = router
 