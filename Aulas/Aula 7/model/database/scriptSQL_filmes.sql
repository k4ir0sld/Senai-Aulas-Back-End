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

insert into tbl_personagem(
							nome
                            )
						values
                        (
							'Pelé'
                            );
                            
create table tbl_personagem (
	id 				int not null primary key auto_increment,
    nome 			varchar(80) not null
);
                            
select * from tbl_personagem;

select * from tbl_personagem order by id desc;

select * from tbl_personagem where id = 2;

update tbl_personagem set
                        nome            = 'Valverde'
                        where id            = 5 ;
desc tbl_personagem;

#Nacionalidade
create table tbl_nacionalidade (
	id 				int not null primary key auto_increment,
    nome 			varchar(80) not null
);

create table tbl_sexo(
	id 				int not null primary key auto_increment,
    sigla			varchar(4) not null,
    descricao 		varchar(40) not null
);

insert into tbl_nacionalidade(
							nome
                            )
						values
                        (
							'Brasileiro'
                            );
					
select * from tbl_nacionalidade order by id desc;

select * from tbl_nacionalidade where id = 2;

update tbl_nacionalidade set
                        nome            = 'Australiano'
                        where id            = 1 ;
                            
desc tbl_nacionalidade;
                            