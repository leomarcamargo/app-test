# Use uma imagem base do Node.js
FROM node:14

# Defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie o package.json e package-lock.json para instalar as dependências primeiro
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie os arquivos do projeto para o diretório de trabalho
COPY . .

# Exponha a porta que o servidor irá usar
EXPOSE 2000

# Defina o comando de inicialização
CMD ["npm", "start"]
