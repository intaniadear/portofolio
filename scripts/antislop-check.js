import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const BANNED_PATTERNS = [
  { pattern: /passionate\s+(about\s+)?(developer|engineer|builder)/i, label: 'Cliché: "Passionate developer"' },
  { pattern: /seamless(ly)?\s+(user\s+)?experience/i, label: 'Buzzword: "Seamless experience"' },
  { pattern: /spearheading/i, label: 'Corporate jargon: "Spearheading"' },
  { pattern: /leveraging\s+(cutting-edge|modern|the\s+power\s+of)/i, label: 'Buzzword: "Leveraging cutting-edge"' },
  { pattern: /crafting\s+digital\s+(symphonies|solutions|masterpieces)/i, label: 'Purple prose: "Crafting digital symphonies"' },
  { pattern: /lorem\s+ipsum/i, label: 'Unfinished placeholder: "Lorem ipsum"' },
  { pattern: /john\s+doe/i, label: 'Generic name placeholder: "John Doe"' },
  { pattern: /jane\s+doe/i, label: 'Generic name placeholder: "Jane Doe"' },
  { pattern: /from-purple-500\s+to-indigo-500/i, label: 'AI template giveaway: Generic purple gradient' },
  { pattern: /blur-\[1\d{2}px\]\s+bg-purple/i, label: 'AI template giveaway: Neon purple background blob' },
];

const SCAN_DIRS = ['src', 'index.html'];
const IGNORED_DIRS = ['node_modules', 'dist', '.git', 'scripts'];

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const relPath = path.relative(rootDir, fullPath);
    if (IGNORED_DIRS.some(ignored => relPath.startsWith(ignored))) continue;

    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath, fileList);
    } else if (/\.(tsx|ts|jsx|js|html|md|css)$/.test(file)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

console.log('🔍 Running Anti-Slop Project Audit...');
let filesToScan = [];
for (const target of SCAN_DIRS) {
  const fullTarget = path.join(rootDir, target);
  if (fs.existsSync(fullTarget)) {
    if (fs.statSync(fullTarget).isDirectory()) {
      walk(fullTarget, filesToScan);
    } else {
      filesToScan.push(fullTarget);
    }
  }
}

let violations = 0;

for (const filePath of filesToScan) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const relPath = path.relative(rootDir, filePath);
  const lines = content.split('\n');

  lines.forEach((line, index) => {
    for (const check of BANNED_PATTERNS) {
      if (check.pattern.test(line)) {
        console.warn(`⚠️  [SLOP DETECTED] ${check.label}`);
        console.warn(`   File: ${relPath}:${index + 1}`);
        console.warn(`   Line: ${line.trim()}`);
        console.warn('');
        violations++;
      }
    }
  });
}

if (violations === 0) {
  console.log('✅ Clean audit! No AI-slop or generic clichés detected. High craft confirmed.');
  process.exit(0);
} else {
  console.warn(`❌ Found ${violations} potential slop pattern(s). Please review and refactor.`);
  process.exit(1);
}

