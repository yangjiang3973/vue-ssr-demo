import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { test } from './app.controller.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const server = express();

server.get('/', test);
console.log(path.join(__dirname, '../dist'));
server.use(express.static(path.join(__dirname, '../dist')));

server.listen(3000, () => {
    console.log('ready');
});
