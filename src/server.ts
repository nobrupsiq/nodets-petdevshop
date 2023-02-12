import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';

dotenv.config(); // DotEnv porta

const server = express(); // Servidor

server.set('view engine', 'mustache'); // Engine de vizualização será o mustache
server.set('views', path.join(__dirname, 'views')); // Pasta de vizualizações
server.engine('mustache', mustache()); // Engine

server.use(express.static(path.join(__dirname, '../public'))); // Pasta estática onde ficam as imagens e o CSS

// ROTAS

server.listen(process.env.PORT); // Porta (4000) que está setada no meu arquivo .env
