## Rocketseat NextLevel Proffy

Projeto "Proffy" desenvolvido a partir do treinamento Semana NextLevel da Rocketseat.

Atualização: 2025

### Especificações:

- NodeJs v23.7.0
- React v19
- Router v6

### Para rodar a aplicação:

#### Backend:

Acesse a pasta \server:

```
cd server
```

Instale as dependências do projeto:

```
npm install
```

Após a instalação das dependências, execute a migration para criação do banco de dados:

```
npm run knex:migrate
```

Execute a aplicação:

```
npm start
```

Server started on port: 3333 🚀

---

#### Frontend:

Com o backend rodando, em outro terminal, acesse a pasta \web:

```
cd web
```

Instale as dependências do frontend:

```
npm install
```

Execute a aplicação:

```
npm start
```

---

### Guia de uso

Na seção "Dar aula" cadastre o professor: nome, avatar (endereço de imagem na web), whatsapp, biografia (texto descritivo) e adicione intervalos de horários disponíveis para a matéria selecionando dia da semana, início (from) e fim do intervalo (to). Adicione mais intervalos clicando em "+ Novo horário.
