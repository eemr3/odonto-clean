# Lista de Artigos

Aplicação que realiza mini gerenciamento de um consultório dentário, onde pode-se cadastrar paciente, cadastrar tratamento e verificar o faturamento por período.

## Requisitos

Requisitos minimo para rodar o back-end da aplicação:

- NodeJs v16.x (foi usado a versão 16.15.1)
- Postgres
- Docoker (opcional)

Observação: Se tiver o docker instalado e não tiver o mysql, basta cria um container com o mysql.

Exemplro de um container myslq na versão 8

Use esse comando no terminal

```bash
docker run --name softeo-postgres -e "POSTGRES_USER=admin" -e "POSTGRES_PASSWORD=12345678" -p 5432:5432 -d postgres

```
Obs: Existe um arquivo .env.exemple com as configurações do banco de dados, se optar por usar o comando acima já vai funcionar, caso contrário deverá alterar os valores na variável de ambiente para os valores usados no banco que está instalado o qual deseja usar.


## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:eemr3/desafio-softeo.git
```

Entre no diretório do projeto

```bash
  cd desafio-softeo
```

Instale as dependências

```bash
  npm install
```
### Entre na pasta `back-end`: 

#### Variáveis de Ambiente

Para rodar esse projeto, você vai precisar seguir as intruções abaixo:

- Dentro da pasta `back-end` renomei o arquivo `.env.exemple` para `.env`, ele contem os valores da configuração do banco de dados. Altere os valores se necessário!

- Renomei o arquivo `secrete.key.exemple` para `secrete.key`, ele já contem a chave secreta para o JWT.


Obs: Só estão indo esse arquivo com a key, as configurações do banco de dados e a chave secreta por motivo de desafio, em um projeto real esses valores não sobem para o github.

#### Crie o banco de dados

Dentro da pasta back-end:

```bash
npm run database
``` 
O banco de dados é criado com as tabelas `users`, `favorites`, `authors` e `urls`. A tabela `users` é populado com dados de um usuário.

### Dados para realizar o login: 
```bash
email: erica@email.com
senha: 123456
```
Para rodar o back-end digite o comando: 

```bash
npm run dev
```

## Entre no diretório do ``front-end``

```bash
  cd front-end
```

#### Variáveis de Ambiente

Para rodar esse projeto, você vai precisar seguir as intruções abaixo:

Dentro da pasta `font-end` digite o comando:

```bash
npm start
```
Obs: O back-end deve estar rodando para o front-end funcionar!

## Rodando tests

### Back-end
Entre na pasta ``back-end`` e use o comando:
```bash
npm run test:coverage
```

## Informção do Front-end da aplicação

- Diretório do Front-end

```bash
  cd front-end
```

- [Front-End](https://github.com/eemr3/desafio-softeo/tree/main/front-end)

## Informção do Back-end da aplicação

- Diretório do Back-end

```bash
  cd back-end
```
- [Back-End](https://github.com/eemr3/desafio-softeo/tree/main/back-end)