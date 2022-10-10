import { readFileSync } from 'fs';
import { createApp } from '../client/app.js';
import { renderToString } from 'vue/server-renderer';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const test = async (req, res) => {
    const app = createApp();
    const appHtml = await renderToString(app);
    let template = readFileSync(path.join(__dirname, '../dist/index.html'), {
        encoding: 'utf-8',
    });
    let html = template.replace(`<!-- template-placeholder -->`, appHtml);
    return res.send(html);
};
