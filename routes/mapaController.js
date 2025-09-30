const express = require('express')
const router = express.Router()

let mapas = [
    
        {
          id: 1,
          nome: "Abyss",
          bombs: "2",
          regiao: "Zona Abissal",
          tamanho: "Pequeno/Médio"
        },
        {
          "id": 2,
          nome: "Ascent",
          bombs: "2",
          regiao: "Itália",
          tamanho: "Médio"
        },
        {
          id: 3,
          nome: "Bind",
          bombs: "2",
          regiao: "Marrocos",
          tamanho: "Pequeno"
        },
        {
          id: 4,
          nome: "Haven",
          bombs: "3",
          regiao: "Butão",
          tamanho: "Grande"
        },
        {
          id: 5,
          nome: "Sunset",
          bombs: "2",
          regiao: "Los Angeles, EUA",
          tamanho: "Médio"
        }
]

router.post('/mapas', (req, res, next) => {
const {nome, bombs, regiao, tamanho} = req.body

if(!nome || !bombs || !regiao || !tamanho)    {
    return res.status(400).json({error: "bombs, região e tamanho são obrigatorios"})
}

const mapa = mapas.find (mapa => mapa.nome == nome)
if(mapa){
    return res.status(409).json({error: "nome já cadastrado"})
}
// cadastrar o novo mapa na lista
const novoMapa = {
    id: Date.now(),
    nome,
    bombs, 
    regiao,
    tamanho
}
// inserir o novo mapa montada na lista
mapas.push(novoMapa)
res.status(201).json({message: "Mapa Cadastrado!!!!", novoMapa})

})

// Listar todos
// - GET /mapa
router.get('/mapas', (req, res, next) => {
    res.json(mapas)
})

// Buscar um
// - GET /mapas/{id}
router.get('/mapas/:id', (req, res, next) => {
    const idRecebido = req.params.id
    const mapa = mapas.find(mapa => mapa.id == idRecebido)
    if(!mapa) {
        return res.status(404).json({error: "Mapa não encontrado!!!" })
    } 
    res.json(mapa)

})

// atualizar
// - PUT /mapa/{id}
router.put('/mapas/:id', (req, res, next) => {
    const { bombs, tamanho, regiao} = req.body
if(!bombs || !regiao|| !tamanho ){
    return res.status(400).json({error: "bombs, região e tamanho são obrigatorios"})
}
// validar se o mapa com aquele ID existe na lista
const idRecebido = req.params.id
const mapa = mapas.find(mapa => mapa.id == idRecebido)
if(!mapa){
    return res.status(404).json({error: "Mapa não encontrado"})
}
// sobreescreve os dados dos Mapa pra atualizar
mapa.bombs = bombs
mapa.regiao = regiao
mapa.tamanho = tamanho
res.json({message: "Mapa atualizado com sucesso"})
})

// deletar
// - DELETE /mapa/{id}
router.delete('/mapas/:id', (req, res, next) => {
    const idRecebido = req.params.id
    const mapa = mapas.find(mapa => mapa.id == idRecebido)
    if (!mapa) {
        return res.status(404).json({error:"Mapa não encontrado"})
    }
    mapas = mapas.filter(mapa => mapa.id != idRecebido)

    res.json({message: "Mapa excluido com sucesso"})
})



module.exports = router
 