import fs from 'fs/promises';

const inputPath = new URL('../../src/data/seller.json', import.meta.url);
const outputPath = new URL('../../src/data/seller-sorted.json', import.meta.url);

// 1️⃣ Read
const raw = await fs.readFile(inputPath, 'utf-8');
const dataSellerJson = JSON.parse(raw);

// 2️⃣ Sort alphabetically
const sorted = dataSellerJson.sort((a, b) =>
  a.localeCompare(b, 'en', { sensitivity: 'base' })
);

// 3️⃣ Map to label/value
const result = sorted.map((seller, index) => ({
  label: seller,
  value: index + 1
}));

// 4️⃣ Write to file
await fs.writeFile(
  outputPath,
  JSON.stringify(result, null, 2),
  'utf-8'
);

console.log('✅ JSON file saved:', outputPath.pathname);
