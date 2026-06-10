// Generates public/og.png (1200x630) from an inline SVG. Run: node scripts/og.mjs
import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="8%" stop-color="#6D6AF6"/>
      <stop offset="92%" stop-color="#2BD9EE"/>
    </linearGradient>
    <radialGradient id="orbA" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#6D6AF6" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#6D6AF6" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="orbB" cx="60%" cy="40%" r="70%">
      <stop offset="0%" stop-color="#2BD9EE" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#2BD9EE" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="#090D18"/>
  <circle cx="1050" cy="40" r="420" fill="url(#orbA)"/>
  <circle cx="120" cy="610" r="360" fill="url(#orbB)"/>

  <!-- dotted grid -->
  ${Array.from({ length: 18 }, (_, r) =>
    Array.from({ length: 34 }, (_, c) =>
      `<circle cx="${60 + c * 33}" cy="${50 + r * 33}" r="1" fill="#FFFFFF" fill-opacity="0.06"/>`
    ).join("")
  ).join("")}

  <!-- status pill -->
  <rect x="64" y="96" width="496" height="46" rx="23" fill="#FFFFFF" fill-opacity="0.04" stroke="#FFFFFF" stroke-opacity="0.1"/>
  <circle cx="94" cy="119" r="6" fill="#2BD9EE"/>
  <text x="114" y="126" font-family="Consolas, 'Courier New', monospace" font-size="19" letter-spacing="3" fill="#9AA3B5">OPEN TO OPPORTUNITIES — PUNE, INDIA</text>

  <!-- headline -->
  <text x="64" y="266" font-family="Arial, Helvetica, sans-serif" font-size="76" font-weight="700" letter-spacing="-2" fill="#E8ECF4">Full-stack engineer</text>
  <text x="64" y="356" font-family="Arial, Helvetica, sans-serif" font-size="76" font-weight="700" letter-spacing="-2" fill="url(#grad)">building AI products</text>
  <text x="64" y="446" font-family="Arial, Helvetica, sans-serif" font-size="76" font-weight="700" letter-spacing="-2" fill="#E8ECF4">that hold up.</text>

  <!-- footer -->
  <text x="64" y="552" font-family="Consolas, 'Courier New', monospace" font-size="20" letter-spacing="3" fill="#9AA3B5">KAUSTUBH JADHAV</text>
  <text x="1136" y="552" font-family="Consolas, 'Courier New', monospace" font-size="20" letter-spacing="3" fill="#5B6478" text-anchor="end">REACT / NODE / LANGCHAIN / MCP / AZURE</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(join(root, "public", "og.png"));
console.log("og.png written");
