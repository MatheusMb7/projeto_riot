const express = require('express')
const router = express.Router()

// Lista de agentes para simular o banco de dados
let agentes = [
    {
      id: 1,
      nome: "Sova",
      habilidade: "Fúria do Caçador",
      funcao: "Iniciador",
      sexo: "Masculino",
      origem: "Rússia"
    },
    {
      id: 2,
      nome: "Killjoy",
      habilidade: "Confinamento",
      funcao: "Sentinela",
      sexo: "Feminino",
      origem: "Alemanha"
    },
    {
      id: 3,
      nome: "Kay-O",
      habilidade: "NULL/CMD",
      funcao: "Iniciador",
      sexo: "Android",
      origem: "Complexo Mecatrônico"
    },
    {
      id: 4,
      nome: "Cypher",
      habilidade: "Roubo Neural",
      funcao: "Sentinela",
      sexo: "Masculino",
      origem: "Marrocos"
    },
    {
      id: 5,
      nome: "Iso",
      habilidade: "Contrato de Abate",
      funcao: "Duelista",
      sexo: "Masculino",
      origem: "China"
    }
]

// ====================
// CRIAR UM AGENTE
// ====================
router.post('/agentes', (req, res) => {
    const { nome, habilidade, funcao, sexo, origem } = req.body

    // validar se os dados vieram
    if(!nome || !habilidade || !funcao || !sexo || !origem) {
        return res.status(400).json({ error: "nome, habilidade, função, sexo e origem são obrigatórios" })
    }

    // validar se o agente já existe
    const agenteExistente = agentes.find(a => a.nome.toLowerCase() === nome.toLowerCase())
    if(agenteExistente){
        return res.status(409).json({ error: "Agente já cadastrado" })
    }

    // criar novo agente
    const novoAgente = {
        id: Date.now(),
        nome,
        habilidade, 
        funcao,
        sexo,
        origem
    }

    agentes.push(novoAgente)
    res.status(201).json({ message: "Agente cadastrado com sucesso!", novoAgente })
})

// ====================
// LISTAR TODOS OS AGENTES
// ====================
router.get('/agentes', (req, res) => {
    res.json(agentes)
})

// ====================
// BUSCAR UM AGENTE PELO ID
// ====================
router.get('/agentes/:id', (req, res) => {
    const idRecebido = parseInt(req.params.id)
    const agente = agentes.find(a => a.id === idRecebido)

    if(!agente) {
        return res.status(404).json({ error: "Agente não encontrado" })
    }

    res.json(agente)
})

// ====================
// ATUALIZAR UM AGENTE
// ====================
router.put('/agentes/:id', (req, res) => {
    const { nome, habilidade, funcao, sexo, origem } = req.body

    if(!nome || !habilidade || !funcao || !sexo || !origem){
        return res.status(400).json({ error: "nome, habilidade, função, sexo e origem são obrigatórios" })
    }

    const idRecebido = parseInt(req.params.id)
    const agente = agentes.find(a => a.id === idRecebido)

    if(!agente){
        return res.status(404).json({ error: "Agente não encontrado" })
    }

    // atualizar dados
    agente.nome = nome
    agente.habilidade = habilidade
    agente.funcao = funcao
    agente.sexo = sexo
    agente.origem = origem

    res.json({ message: "Agente atualizado com sucesso!", agente })
})

// ====================
// DELETAR UM AGENTE
// ====================
router.delete('/agentes/:id', (req, res) => {
    const idRecebido = parseInt(req.params.id)
    const agente = agentes.find(a => a.id === idRecebido)

    if(!agente){
        return res.status(404).json({ error: "Agente não encontrado" })
    }

    agentes = agentes.filter(a => a.id !== idRecebido)
    res.json({ message: "Agente excluído com sucesso!" })
})

module.exports = router
