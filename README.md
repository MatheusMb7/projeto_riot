"PROJETO RIOT"

API REST desenvolvida com Node.js e Express para gerenciar dados do jogo Valorant. O projeto foi criado como parte de um trabalho acadêmico para consolidar os conceitos de:
- API REST
- Rotas e métodos HTTP
- Middlewares
- Versionamento com Git
- Documentação básica

A aplicação permite gerenciar Agentes, Armas, Jogadores, Partidas e Mapas, implementando as operações CRUD (Create, Read, Update, Delete).

Instalação e Execução
Pré-requisitos:
- Node.js
- Express
- Jest
- Nodemon
- JavaScript
- Git/GitHub para versionamento
- npm instalado

Passos:
1. Clone o repositório:
   git clone https://github.com/seu-usuario/nome-do-repo.git
   cd projeto-riot

2. Instale as dependências:
   npm install
   npm install express cors
   npm install --save-dev nodemon

3. Inicie o servidor:
   npm start

A API estará disponível em: http://localhost:3000
Endpoints Disponíveis:

/agentes
Endpoint base: /agentes
Exemplo de objeto:
{"id": 1, "nome": "Sova", "habilidade": "Fúria do Caçador", "funcao": "Iniciador", "sexo": "Masculino", "origem": "Rússia"}

/armas
Endpoint base: /armas
Exemplo de objeto:
{"id": 1, "nome": "Vandal", "tipo": "Rifle", "preco": 2900}

/jogadores
Endpoint base: /jogadores
Exemplo de objeto:
{"id": 1, "nome": "TenZ", "nickname": "TenZ", "nivel": 50, "agenteFavorito": "Jett"}

/partidas
Endpoint base: /partidas
Exemplo de objeto:
{"id": 1, "data": "2025-09-29", "nomeMapa": "Haven", "tipo": "Ranqueada"}

/mapas
Endpoint base: /mapas
Exemplo de objeto:
{"id": 1, "nome": "Ascent", "localizacao": "Itália"}

Exemplo de Requisição
POST /agentes
Body JSON:
{
  "nome": "Jett",
  "habilidade": "Corrente Ascendente",
  "funcao": "Duelista",
  "sexo": "Feminino",
  "origem": "Coreia do Sul"
}

Resposta (201 Created):
{
  "id": 3,
  "nome": "Jett",
  "habilidade": "Corrente Ascendente",
  "funcao": "Duelista",
  "sexo": "Feminino",
  "origem": "Coreia do Sul"
}

Integrantes do Projeto
Nome GitHub Contribuições:
Deyvison Brito (24114290166) @DeyvinDev CRUD de Agentes, Armas e Partidas, documentação da API, e Rotas
Matheus Bruno (24114290112) @MatheusMb7 CRUD de Jogadores, Mapas, index e suporte ao middleware, Testes e Organização do Projeto e Postman.