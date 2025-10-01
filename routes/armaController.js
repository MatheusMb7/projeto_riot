const express = require('express')
const router = express.Router()

let armas = [
    {
        id: 1,
        nome: "Vandal",
        tipo: "Rifle",
        preco: 2900
    },
    {
        id: 2,
        nome: "Phantom",
        tipo: "Rifle",
        preco: 2900
    },
    {
        id: 3,
        nome: "Operator",
        tipo: "Sniper",
        preco: 4500
    },
    {
        id: 4,
        nome: "Sheriff",
        tipo: "Pistola",
        preco: 800
    },
    {
        id: 5,
        nome: "Ghost",
        tipo: "Pistola",
        preco: 500
    },
    {
        id: 6,
        nome: "Judge",
        tipo: "Shotgun",
        preco: 1500
    },
    {
        id: 7,
        nome: "Bucky",
        tipo: "Shotgun",
        preco: 900
    },
    {
        id: 8,
        nome: "Spectre",
        tipo: "SMG",
        preco: 1600
    },
    {
        id: 9,
        nome: "Stinger",
        tipo: "SMG",
        preco: 1000
    },
    {
        id: 10,
        nome: "Classic",
        tipo: "Pistola",
        preco: 500
    }
]

// ====================
// CRIAR UMA ARMA
// ====================
router.post('/armas', (req, res) => {
    const { nome, tipo, preco } = req.body

    if (!nome || !tipo || preco === undefined) {
        return res.status(400).json({ error: "nome, tipo e preco são obrigatórios" })
    }

    const armaExistente = armas.find(a => a.nome.toLowerCase() === nome.toLowerCase())
    if (armaExistente) {
        return res.status(409).json({ error: "Arma já cadastrada" })
    }

    const novaArma = {
        id: Date.now(),
        nome,
        tipo,
        preco
    }

    armas.push(novaArma)
    res.status(201).json({ message: "Arma cadastrada com sucesso!", novaArma })
})

// ====================
// LISTAR TODAS AS ARMAS
// ====================
router.get('/armas', (req, res) => {
    res.json(armas)
})

// ====================
// BUSCAR UMA ARMA PELO ID
// ====================
router.get('/armas/:id', (req, res) => {
    const idRecebido = parseInt(req.params.id)
    const arma = armas.find(a => a.id === idRecebido)

    if (!arma) {
        return res.status(404).json({ error: "Arma não encontrada" })
    }

    res.json(arma)
})

// ====================
// ATUALIZAR UMA ARMA
// ====================
router.put('/armas/:id', (req, res) => {
    const { nome, tipo, preco } = req.body

    if (!nome || !tipo || preco === undefined) {
        return res.status(400).json({ error: "nome, tipo e preco são obrigatórios" })
    }

    const idRecebido = parseInt(req.params.id)
    const arma = armas.find(a => a.id === idRecebido)

    if (!arma) {
        return res.status(404).json({ error: "Arma não encontrada" })
    }

    arma.nome = nome
    arma.tipo = tipo
    arma.preco = preco

    res.json({ message: "Arma atualizada com sucesso!", arma })
})

// ====================
// DELETAR UMA ARMA
// ====================
router.delete('/armas/:id', (req, res) => {
    const idRecebido = parseInt(req.params.id)
    const arma = armas.find(a => a.id === idRecebido)

    if (!arma) {
        return res.status(404).json({ error: "Arma não encontrada" })
    }

    armas = armas.filter(a => a.id !== idRecebido)
    res.json({ message: "Arma excluída com sucesso!" })
})

module.exports = router
