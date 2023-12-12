 <h1 align="center">Projeto Frente de Caixa - Backend! :moneybag: </h1>

## 🚀 Sobre o projeto
O projeto proposto tem como objetivo criar uma API REST do zero simulando um caixa de mercado trazendo algumas funções do dia a dia. Nesse projeto temos algumas funcionalidades como:
- `Login de usuário e validação do usuário logado`
- `Diversos CRUDS`
- `Bucket para salvar imagens dos produtos cadastrados` 
- `Envio de e-mails`

Você pode ter acesso ao deploy neste link: https://drab-pear-duck-yoke.cyclic.app/

## :hammer: Funcionalidas do projeto
Possuí endpoints de CRUD para diversas entidades como produtos, usuários, clientes, pedidos entre outras, possuí validações de usuários logado através de um token de autenticação para utilização do endpoints, envio das imagens dos produtos cadastrados ao bucket e envio de emails para cada pedido feito.

## 🛠️ Ferramentas 🛠️ 
Para esse projeto foram utilizados diversas tecnologias, entre elas:
- `Node.js e Express`: Para construção do back-end
- `Postgres`: Banco de dados da aplicação
- `Knex`: Querybuilder para facilitar na criação das querys
- `JWT e Bcrypt`: Para autenticação e validação dos usuários ao utiliar os endpoints
- `JOI`: Para validação dos endpoints
- `nodemailer`: Para envio de emails
- `aws-sdk e multer`: Para configuração do bucket que salva as imagens dos produtos cadastrados
- `cors`: Para configuração do deploy
  
