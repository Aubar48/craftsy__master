const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030;

/* configuraciones */
app.use(express.static(path.join(__dirname, 'public')));

/* rutas */
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));
app.get('/home', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'views', 'register.html')));
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'views', '404.html')));

app.listen(PORT, () => console.log('Servidor corriendo en http://localhost:' + PORT));