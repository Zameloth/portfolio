import sharp from 'sharp';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const svg = readFileSync(resolve(__dirname, '../public/favicon.svg'));

await sharp(svg).resize(32, 32).png().toFile(resolve(__dirname, '../public/favicon-32.png'));
await sharp(svg).resize(180, 180).png().toFile(resolve(__dirname, '../public/apple-touch-icon.png'));

console.log('favicons generated');
