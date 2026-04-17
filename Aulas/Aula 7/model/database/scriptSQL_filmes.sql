#Cria o database do projeto de filmes
create database db_filmes_20261_a;

#Ativa o uso do database de filmes
use db_filmes_20261_a;

#Cria a tabela de filmes
create table tbl_filme (
	id 				int not null primary key auto_increment,
    nome 			varchar(80) not null,
    data_lancamento date not null,
    duracao			time not null,
    sinopse			text not null,
    avaliacao		decimal(3,2) default null,
    valor			decimal(5,2) not null default 0,
    capa			varchar(255)
);

show tables;