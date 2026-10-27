# Meu primeiro projeto NEXT - TodoList

## Introdução ao desenvolvimento de uma aplicação To-Do com Next.js e MongoDB

## Objetivos
Aplicação de Lista de Tarefas completa, integrando o front do Next.js com backend em API Routes e o MongoDB. Consolidando ideais de arquitetura Full-Stack dentro de um mesmo framework

- criar e configurar um projeto Next.js com TypeScipt
- configurar a conexão com o MongoDB usando Mongoose
- criar uma modelagem de dados
- implementar rotas de API (Listar, Cadastrar, Atulizar e Excluir tarefas)
- consumir essas rotas a partir do frontend
- e compreender o fluxo do Crud na aplicação

## contextualização
A aplicação deve permitir que o usuário:
- adicione uma nova tarefa;
- visualize todas as tarefas cadastradas
- marque tarefa como concluída ou pendentes
- remova itens da lista 
- tenha persistencia de daos em banco

## Visão Geral da Arquitetura

```mermaid
flowchart TB
    Frontend["Frontend<br/> React + Next.js<br/>Componentes e interface"]
    API["API Routes (Next.js)<br/>/api/todos"]
    MongoDB["MongoDB<br/>Armazenamento de Tarefas"]

    Frontend -->|Request HTTP / fetch| API
    API --> |Solicitação Mongoose| MongoDB
    MongoDB --> |Devolve a Solicitação| API
    API --> |Response HTTP/ fetch| Frontend
```

## Escopo do Projeto

### FrontEnd (Next.js/React)

- exibição da lista de tarefas;
- formulário para adicionar novas tarefas;
- botão para alternar status (concluída ou pendente);
- botão para excluir tarefas;
- atualização dinâmica da interface sem recarregar a página.

### BackEnd (Next.js API Routes)

- `GET /api/todos`: retorna todas as tarefas;
- `POST /api/todos`: cria uma nova tarefa;
- `PUT /api/todos/[id]`: atualiza uma tarefa existente;
- `DELETE /api/todos/[id]`: remove uma tarefa.


### Banco de Dados (MongoDB)

- armazenamento das tarefas;
- persistência do título e do status de conclusão;
- conexão segura e reutilizável com o banco.

## Estrutura do Projeto

```text
todo-app/
|-- public/
|-- src/
|   |-- app/
|   |   |-- pages/
|   |   |-- componentes/
|   |   |-- model/
``` 

## Dependências 

npm install mongoose
> permite conectar a aplicação ao MongoDB, definir Modelos para os dados e realizar operações do CRUD

npm install -D @types/react @types/node
> adiciona definições para o Typescript  dos componenetes react e node


