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

Após a instalação das dependências, execute a migration para criação do banco de dados em arquivo, na pasta src/database/database.sqlite:

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

### Guia de uso:

Na seção "Dar aula" cadastre intervalos de horários disponíveis para aulas preenchendo os campos Nome Completo, Avatar (endereço de imagem na web), Whatsapp, Biografia (texto descritivo) e adicione intervalos de horários disponíveis para a matéria selecionando dia da semana, início (Das) e fim do intervalo (Até). Adicione mais intervalos clicando em "+ Novo horário". Clique em "Salvar cadastro" para registrar no banco de dados.

Na seção "Estudar" encontre aulas disponíveis, selecionando matéria, dia da semana e horário. Havendo um ou mais professor/matéria dentro do intervalo (>= "Das" < "Até") a lista é exibida abaixo do form. Clique no botão whatsapp para abrir a página da api.whatsapp a fim de enviar mensagem e criar uma conexão. O número de conexões é atualizado na Home.
