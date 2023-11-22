CREATE DATABASE pdv2 

create table
    usuarios(
        id serial primary key unique,
        nome text,
        email text unique,
        senha text
    );

create table
    categorias(
        id serial primary key unique,
        descricao text
    );

insert into
    categorias(descricao)
values ('Informática'), ('Celulares'), ('Beleza e Perfumaria'), ('Mercado'), ('Livros e Papelaria'), ('Brinquedos'), ('Moda'), ('Bebê'), ('Games')

CREATE TABLE
    produtos(
        id serial primary key unique,
        descricao text,
        quantidade_estoque numeric,
        valor numeric,
        categoria_id integer references categorias(id)
    );

CREATE TABLE
    clientes(
        id serial primary key unique,
        nome text,
        email text unique,
        cpf text unique,
        cep text,
        rua text,
        numero text,
        bairro text,
        cidade text,
        estado text
    );

create table
    pedidos(
        id serial primary key,
        cliente_id int references clientes(id),
        observacao text,
        valor_total numeric
    );

create table
    pedido_produtos(
        id serial primary key,
        pedido_id int references pedidos(id),
        produto_id int references produtos(id),
        quantidade_produto numeric,
        valor_produto numeric
    );

ALTER TABLE produtos ADD COLUMN produto_imagem text;









