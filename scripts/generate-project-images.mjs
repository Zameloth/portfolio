import sharp from 'sharp';
import { mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const W = 1200;
const H = 675; // 16:9

const projects = [
	{ slug: 'clair-obscur', title: 'Clair Obscur' },
	{ slug: 'deep-rl', title: 'Deep Reinforcement Learning Library' },
	{ slug: 'mlops-lending-club', title: 'MLOps — Lending Club' },
];

function coverSvg(title) {
	return `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(148,163,184,0.06)" stroke-width="1"/>
    </pattern>
    <radialGradient id="glow" cx="50%" cy="45%" r="50%">
      <stop offset="0%" stop-color="rgba(251,191,36,0.18)"/>
      <stop offset="100%" stop-color="rgba(251,191,36,0)"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="#0f172a"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <rect x="24" y="24" width="${W - 48}" height="${H - 48}"
        fill="none" stroke="rgba(148,163,184,0.14)" stroke-width="1" rx="4"/>

  <rect x="56" y="56" width="180" height="26" rx="13"
        fill="rgba(245,158,11,0.12)" stroke="rgba(245,158,11,0.4)" stroke-width="1"/>
  <text x="72" y="74" font-family="monospace" font-size="12" fill="#fbbf24">
    placeholder
  </text>

  <text x="${W / 2}" y="${H / 2 + 10}"
        font-family="monospace" font-size="40" font-weight="bold"
        fill="#f8fafc" text-anchor="middle" letter-spacing="-0.5">
    ${title}
  </text>

  <line x1="${W / 2 - 60}" y1="${H / 2 + 40}" x2="${W / 2 + 60}" y2="${H / 2 + 40}"
        stroke="#f59e0b" stroke-width="1.5" opacity="0.6"/>

  <text x="${W / 2}" y="${H / 2 + 72}"
        font-family="monospace" font-size="16"
        fill="#64748b" text-anchor="middle">
    cover temporaire
  </text>
</svg>
`.trim();
}

function diagramSvg() {
	const w = 900;
	const h = 500;
	return `
<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${w}" height="${h}" fill="#0f172a"/>
  <rect x="16" y="16" width="${w - 32}" height="${h - 32}"
        fill="none" stroke="rgba(148,163,184,0.14)" stroke-width="1" rx="4"/>
  <text x="${w / 2}" y="${h / 2}"
        font-family="monospace" font-size="24"
        fill="#94a3b8" text-anchor="middle">
    inline image test — architecture diagram
  </text>
</svg>
`.trim();
}

for (const { slug, title } of projects) {
	const dir = resolve(__dirname, `../src/content/projects/images/${slug}`);
	mkdirSync(dir, { recursive: true });
	await sharp(Buffer.from(coverSvg(title))).png().toFile(resolve(dir, 'cover.png'));
	console.log(`cover.png generated → ${dir}/cover.png`);
}

const diagramDir = resolve(__dirname, '../src/content/projects/images/clair-obscur');
await sharp(Buffer.from(diagramSvg())).png().toFile(resolve(diagramDir, 'diagram.png'));
console.log(`diagram.png generated → ${diagramDir}/diagram.png`);
