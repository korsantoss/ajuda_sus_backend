# Ajuda SUS

### :gear: Configuração Inicial

Para rodar o projeto é necessário instalar o [Node.js](https://nodejs.org/)

Dentro da pasta do projeto abra o terminal e rode os seguintes comandos:

- para instalar todas as dependências `npm install`
- para rodar o projeto `npm run dev`

### :pushpin: Endpoints

| Método | Rota | Paramêtro | Descrição                                           |
| ------ | ---- | --------- | --------------------------------------------------- |
| GET    | /    | nenhum    | Retorna a confirmação de que o backend está rodando |

Exemplo de retorno:

```JSON
{
  "msg": "backend executando"
}
```

| Método | Rota     | Paramêtro | Descrição                            |
| ------ | -------- | --------- | ------------------------------------ |
| GET    | /bairros | nenhum    | Retorna todos os bairros cadastrados |

Exemplo de retorno:

```JSON
[
  {
    "bairro": "São Caetano"
  },
  {
    "bairro": "São Pedro"
  }
]
```

| Método | Rota      | Paramêtro | Descrição                                                        |
| ------ | --------- | --------- | ---------------------------------------------------------------- |
| GET    | /unidades | bairro    | Retorna as unidades que existem no bairro passado como parâmetro |

OBS: Parâmetro passado pelo body  
Exemplo de parâmetro:

```JSON
{
  "bairro": "São Caetano"
}
```

Exemplo de retorno:

```JSON
[
  {
    "id_unidade": 1,
    "nome": "Unidade A",
    "rua": "Rua A",
    "bairro": "São Caetano",
    "cidade": "Cidade A",
    "numero_endereco": 10,
    "uf": "BA",
    "telefone": "123123",
    "hr_funcionamento": "Segunda à Sexta das 7h às 22h"
  },
  {
    "id_unidade": 2,
    "nome": "Unidade B",
    "rua": "Rua B",
    "bairro": "São Caetano",
    "cidade": "Cidade A",
    "numero_endereco": 20,
    "uf": "BA",
    "telefone": "321312",
    "hr_funcionamento": "Segunda à Sexta das 7h às 22h"
  }
]
```

| Método | Rota         | Paramêtro  | Descrição                                                          |
| ------ | ------------ | ---------- | ------------------------------------------------------------------ |
| GET    | /publicacoes | id_unidade | Retorna as publicações referentes a unidade passada como parâmetro |

OBS: Parâmetro passado pelo body  
Exemplo de parâmetro:

```JSON
{
  "id_unidade": 1
}
```

Exemplo de retorno:

```JSON
[
  {
    "id_publicacao": 1,
    "titulo": "Vacinas Disponíveis",
    "data": "2020-05-02T03:00:00.000Z",
    "conteudo": "As vacinas que para H1N1 já estão disponíveis",
    "id_unidade": 1
  },
  {
    "id_publicacao": 2,
    "titulo": "Combate a Catapora",
    "data": "2020-08-10T03:00:00.000Z",
    "conteudo": "A unidade de saúde está promovento uma campanha de combate a catapora, venha se informar",
    "id_unidade": 1
  }
]
```

### :books: Dependências utilizadas

- [Express](https://www.npmjs.com/package/express)
- [Cors](https://www.npmjs.com/package/cors)
- [Knex](https://www.npmjs.com/package/knex)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Consign](https://www.npmjs.com/package/consign)
