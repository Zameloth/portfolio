import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, '../public/og-image.png');

const W = 1200;
const H = 630;

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(148,163,184,0.06)" stroke-width="1"/>
    </pattern>
    <radialGradient id="glow" cx="50%" cy="45%" r="50%">
      <stop offset="0%" stop-color="rgba(251,191,36,0.22)"/>
      <stop offset="100%" stop-color="rgba(251,191,36,0)"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="#0f172a"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- Border frame -->
  <rect x="32" y="32" width="${W - 64}" height="${H - 64}"
        fill="none" stroke="rgba(148,163,184,0.12)" stroke-width="1" rx="4"/>

  <!-- Availability badge -->
  <rect x="72" y="72" width="240" height="30" rx="15"
        fill="rgba(245,158,11,0.12)" stroke="rgba(245,158,11,0.4)" stroke-width="1"/>
  <circle cx="92" cy="87" r="4" fill="#f59e0b"/>
  <text x="106" y="92" font-family="monospace" font-size="13" fill="#fbbf24">
    Disponible · sept. 2026
  </text>

  <!-- Name -->
  <text x="${W / 2}" y="290"
        font-family="monospace" font-size="72" font-weight="bold"
        fill="#f8fafc" text-anchor="middle" letter-spacing="-1">
    Théo ELOY
  </text>

  <!-- Headline -->
  <text x="${W / 2}" y="370"
        font-family="monospace" font-size="28"
        fill="#94a3b8" text-anchor="middle">
    AI Engineer · Ingénieur IA
  </text>

  <!-- Divider -->
  <line x1="${W / 2 - 60}" y1="415" x2="${W / 2 + 60}" y2="415"
        stroke="#f59e0b" stroke-width="1.5" opacity="0.6"/>

  <!-- URL -->
  <text x="${W / 2}" y="460"
        font-family="monospace" font-size="18"
        fill="#64748b" text-anchor="middle">
    theo-eloy.fr
  </text>
</svg>
`.trim();

await sharp(Buffer.from(svg))
  .png()
  .toFile(outPath);

console.log(`og-image.png generated → ${outPath}`);
