const express = require('express');
const app = express();
const path = require('path');

// Configurar EJS como o motor de templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Aponta para o diretório 'views'

// Middleware para definir o valor padrão de projectName
app.use((req, res, next) => {
    res.locals.projectName = process.env.PROJECT_NAME || 'TEST PROJECT';
    next();
});

// Rota para renderizar o index.ejs com o valor de projectName
app.get('/', (req, res) => {
    res.render('index', { projectName: res.locals.projectName });
});

// Porta do servidor
const PORT = process.env.PORT || 2000; // Usando a porta 2000 como padrão
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
