const express = require('express')
const router = express.Router()

// Lista de partidas para simular o banco de dados
let partidas = [
    {
        id: 1,
        data: "2025-09-29",
        nomeMapa: "Bind",
        tipo: "Ranqueada"
    },
    {
        id: 2,
        data: "2025-09-28",
        nomeMapa: "Haven",
        tipo: "Mata - Mata"
    },
    {
        id: 3,
        data: "2025-09-27",
        nomeMapa: "Ascent",
        tipo: "Ranqueada"
    },
    {
        id: 4,
        data: "2025-09-20",
        nomeMapa: "Split",
        tipo: "Mata - Mata"
    },
    {
        id: 5,
        data: "2025-09-30",
        nomeMapa: "Icebox",
        tipo: "Mata - Mata"
    }
]

// ====================
// CRIAR UMA PARTIDA
// ====================
router.post('/partidas', (req, res) => {
    const { data, nomeMapa, tipo } = req.body

    if (!data || !nomeMapa || !tipo) {
        return res.status(400).json({ error: "data, nomeMapa e tipo são obrigatórios" })
    }

    const novaPartida = {
        id: Date.now(),
        data,
        nomeMapa,
        tipo
    }

    partidas.push(novaPartida)
    res.status(201).json({ message: "Partida cadastrada com sucesso!", novaPartida })
})

// ====================
// LISTAR TODAS AS PARTIDAS
// ====================
router.get('/partidas', (req, res) => {
    res.json(partidas)
})

// ====================
// BUSCAR UMA PARTIDA PELO ID
// ====================
router.get('/partidas/:id', (req, res) => {
    const idRecebido = parseInt(req.params.id)
    const partida = partidas.find(p => p.id === idRecebido)

    if (!partida) {
        return res.status(404).json({ error: "Partida não encontrada" })
    }

    res.json(partida)
})

// ====================
// ATUALIZAR UMA PARTIDA
// ====================
router.put('/partidas/:id', (req, res) => {
    const { data, nomeMapa, tipo } = req.body

    if (!data || !nomeMapa || !tipo) {
        return res.status(400).json({ error: "data, nomeMapa e tipo são obrigatórios" })
    }

    const idRecebido = parseInt(req.params.id)
    const partida = partidas.find(p => p.id === idRecebido)

    if (!partida) {
        return res.status(404).json({ error: "Partida não encontrada" })
    }

    partida.data = data
    partida.nomeMapa = nomeMapa
    partida.tipo = tipo

    res.json({ message: "Partida atualizada com sucesso!", partida })
})

// ====================
// DELETAR UMA PARTIDA
// ====================
router.delete('/partidas/:id', (req, res) => {
    const idRecebido = parseInt(req.params.id)
    const partida = partidas.find(p => p.id === idRecebido)

    if (!partida) {
        return res.status(404).json({ error: "Partida não encontrada" })
    }

    partidas = partidas.filter(p => p.id !== idRecebido)
    res.json({ message: "Partida excluída com sucesso!" })
})

module.exports = router
