<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Um projeto de backend desenvolvido no framework <a href="http://nestjs.com/" target="_blank">NestJS</a> para <a href="http://nodejs.org/" target="_blank">Node.js</a></p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição

O objetivo do projeto é criar uma aplicação que backend que corresponda 
devidamente ao esperado de boas práticas de desenvolvimento e arquitetura. 


## Instalação

```bash
$ npm install
```

## Executando a aplicação

```bash
# desenvolvimento
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Banco de Dados

```bash
# inicializa a visualização
$ npm prisma studio
```

## Testes

```bash
# unit tests
$ npm run test
```

## Instruções

Copie as seguintes requisições para seu software de escolha (foi utilizado
Insomnia). Crie as requisições seguindo o formato orientado.  

#### GET /orders/
Retorna todos os pedidos

```
curl --request GET \
  --url http://localhost:3000/orders/ \
  --header 'User-Agent: insomnia/9.3.2'
```

#### GET /orders/:id
Retorna informações de um pedido específico

``` 
curl --request GET \
  --url http://localhost:3000/orders/e676ebed-9f36-44d2-95a3-8b9510b479d6 \
  --header 'User-Agent: insomnia/9.3.2'
```

#### GET /orders/:id/taxes
Retorna o cálculo total dos itens de um pedido, com o devido acréscimo de impostos. 

```
curl --request GET \
  --url http://localhost:3000/orders/e676ebed-9f36-44d2-95a3-8b9510b479d6/taxes \
  --header 'User-Agent: insomnia/9.3.2'
```

#### POST /orders/
Cria um novo pedido.

```
curl --request POST \
  --url http://localhost:3000/orders \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/9.3.2' \
  --data '{
      "name": "order 4"
    }'

```

Ao adicionar um novo pedido, utilize o formato de dados abaixo como guia.
Escreva o objeto da seção do corpo da requisição. 

```
{ 
  "name": "[nome-escolhido]" 
}

```

#### POST /orders/:id/items
Cria um novo item (produto, serviço ou locações) em um pedido específico. 

```
curl --request POST \
  --url http://localhost:3000/orders/e676ebed-9f36-44d2-95a3-8b9510b479d6/items \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/9.3.2' \
  --data '{
      "type": "loan",
      "name": "loan 1 order 2",
      "price": 60
    }'
```

Ao adicionar um novo item, utilize o formato de dados abaixo como guia.
Escreva o objeto da seção do corpo da requisição. 

```
{
	"type": "[product || service || loan]",
	"name": "[nome-do-item]",
	"price": [float]
}
```

Para o campo ```type```, utilize apenas ```"product"```, ```"service"``` ou ```loan```.
Para o campo ```price```, utilize apenas valores númericos reais.    


Certifique-se de que o banco de dados e os valores utilizados estejam criados
e persistidos. 

## Contato

- Autor - [Davi T. Ferreira](https://www.linkedin.com/in/davi-t-ferreira-5b5796152/)

## Licença 

Aplicação desenvolvida em [MIT licensed](LICENSE).
