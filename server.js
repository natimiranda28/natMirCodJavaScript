import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(dirname(import.meta.url));

const PORT = process.env.PORT || 8000;

const app = express();

app.get('/', (_, res) => res.sendFile(join(__dirname, 'index.html')));
app.use('/', express.static(__dirname));

app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) });