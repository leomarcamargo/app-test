
# App Test - Teste de Docker com Express e EJS

Este é um projeto simples de aplicação web usando Node.js, Express e EJS. Ele foi criado para testar a construção e execução de containers Docker. A aplicação exibe uma única mensagem especificada pelo título da página, que pode ser configurada através de uma variável de ambiente `PROJECT_NAME`.

## Estrutura do Projeto

```
/project-root
|-- Dockerfile
|-- package.json
|-- server.js
|-- /views
    |-- index.ejs
```

## Como Funciona

A aplicação web lê uma variável de ambiente chamada `PROJECT_NAME` e exibe seu valor no título da página (`<title>`) e no conteúdo principal (`<h1>`). Se a variável `PROJECT_NAME` não for fornecida, o valor padrão `TEST PROJECT` será exibido.

## Pré-requisitos

- Docker instalado
- Conta no Docker Hub para fazer o push da imagem

## Passos para Construção e Execução da Aplicação

### 1. Construir a Imagem Docker

Para construir a imagem Docker, execute o seguinte comando no diretório raiz do projeto:

```bash
docker build -t leomarcamargo/app-test .
```

### 2. Executar o Container

Para rodar o container, use o comando abaixo. A variável de ambiente `PROJECT_NAME` pode ser configurada conforme necessário:

```bash
docker run -p 2000:2000 -e PROJECT_NAME="Seu Projeto" leomarcamargo/app-test
```

Se você quiser usar o valor padrão (`TEST PROJECT`), basta rodar o container sem a variável de ambiente:

```bash
docker run -p 2000:2000 leomarcamargo/app-test
```

A aplicação estará acessível em `http://localhost:2000`.

### 3. Fazer Push da Imagem para o Docker Hub

Caso haja alterações no projeto e você queira atualizar a imagem no Docker Hub, siga os passos abaixo:

1. **Faça login no Docker Hub** (se ainda não estiver logado):

    ```bash
    docker login
    ```

2. **Rebuild a imagem se houver mudanças**:

    ```bash
    docker build -t leomarcamargo/app-test .
    ```

3. **Faça o push da imagem para o Docker Hub**:

    ```bash
    docker push leomarcamargo/app-test
    ```

Agora, a imagem atualizada estará disponível no Docker Hub e pode ser usada em outros ambientes ou por outros usuários.

## Notas

- Este projeto é destinado a fins de teste e aprendizado sobre Docker, Node.js, e integração com variáveis de ambiente.
- Certifique-se de substituir `leomarcamargo` pelo seu nome de usuário no Docker Hub, caso esteja usando um diferente.
