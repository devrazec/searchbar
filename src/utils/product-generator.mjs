import { v4 as uuidv4 } from 'uuid';
import fs from 'fs/promises';

const sellerJson = new URL(
  '../../src/data/seller-sorted.json',
  import.meta.url
);
const brandJson = new URL('../../src/data/brand-sorted.json', import.meta.url);
const locationJson = new URL('../../src/data/location.json', import.meta.url);
const genderJson = new URL('../../src/data/gender.json', import.meta.url);
const colorJson = new URL('../../src/data/color.json', import.meta.url);
const categoryJson = new URL('../../src/data/category.json', import.meta.url);
const rawProductJson = new URL(
  '../../src/data/raw-product.json',
  import.meta.url
);
const mongodbImageJson = new URL(
  '../../src/data/mongodb-image.json',
  import.meta.url
);
const productJson = new URL('../../src/data/product.json', import.meta.url);

// 1️⃣ Read all JSON files
const [
  sellers,
  brands,
  locations,
  genders,
  colors,
  categories,
  rawProducts,
  mongodbImages,
] = await Promise.all([
  fs.readFile(sellerJson, 'utf-8').then(JSON.parse),
  fs.readFile(brandJson, 'utf-8').then(JSON.parse),
  fs.readFile(locationJson, 'utf-8').then(JSON.parse),
  fs.readFile(genderJson, 'utf-8').then(JSON.parse),
  fs.readFile(colorJson, 'utf-8').then(JSON.parse),
  fs.readFile(categoryJson, 'utf-8').then(JSON.parse),
  fs.readFile(rawProductJson, 'utf-8').then(JSON.parse),
  fs.readFile(mongodbImageJson, 'utf-8').then(JSON.parse),
]);

// 2️⃣ Helper functions
function getRandomLatLng(location) {
  if (!location) return { lat: 0, lng: 0 };
  const lat =
    Math.random() * (location.latMax - location.latMin) + location.latMin;
  const lng =
    Math.random() * (location.lngMax - location.lngMin) + location.lngMin;
  return { lat, lng };
}

function getMongodbImageId(image) {
  return mongodbImages?.[image] ?? null;
}

function getGender(id) {
  return genders?.[id] ?? {};
}

function getColor(id) {
  return colors?.[id] ?? {};
}

function randomDate(start, end) {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );

  return date.toLocaleDateString('en-GB'); // dd/MM/yyyy
}

const start = new Date(2025, 0, 1); // 01/01/2025
const end = new Date(2025, 11, 31); // 31/12/2025

// 3️⃣ Generate N products
function generateProducts(count = 100) {
  return Array.from({ length: count }, (_, index) => {
    const randomProduct =
      rawProducts[Math.floor(Math.random() * rawProducts.length)];
    const randomSeller = sellers[Math.floor(Math.random() * sellers.length)];
    const randomBrand = brands[Math.floor(Math.random() * brands.length)];
    const randomLocation =
      locations[Math.floor(Math.random() * locations.length)];

    const { lat, lng } = getRandomLatLng(randomLocation);
    const color = getColor(randomProduct.colorId);
    const gender = getGender(randomProduct.genderId);

    return {
      uuid: uuidv4(),
      value: index + 1,
      label: randomProduct.name,
      stock: Math.floor(Math.random() * 100),
      price: Number((Math.random() * 99 + 1).toFixed(2)),
      tax: `${(Math.random() * 20).toFixed(2)} %`,
      status: Math.random() > 0.5 ? 'active' : 'inactive',
      available: Math.random() >= 0.2,
      featured: Math.random() >= 0.1,
      date: randomDate(start, end),
      rateId: Math.floor(Math.random() * 5) + 1,
      delivery: Math.floor(Math.random() * 30) + 1,

      image: randomProduct.image,
      mongodbImage: getMongodbImageId(randomProduct.image),

      colorId: randomProduct.colorId,
      colorName: randomProduct.colorName,
      color: color.color,
      tailwind: color.tailwind,

      genderId: randomProduct.genderId,
      genderName: randomProduct.genderName,
      genderColor: gender.color,
      genderTailwind: gender.tailwind,

      categoryId: randomProduct.categoryId,
      categoryName: randomProduct.categoryName,

      sellerId: randomSeller.value,
      sellerName: randomSeller.label,

      brandId: randomBrand.value,
      brandName: randomBrand.label,
      brandAddress: randomBrand.address,
      brandCity: randomBrand.city,
      brandCountry: randomBrand.country,
      brandEmail: randomBrand.email,

      locationId: randomLocation.value,
      locationName: randomLocation.label,
      locationColor: randomLocation.color,
      locationTailwind: randomLocation.tailwind,
      lat,
      lng,
    };
  });
}

// 4️⃣ Generate & save JSON
const products = generateProducts(200);

await fs.writeFile(productJson, JSON.stringify(products, null, 2), 'utf-8');
console.log('✅ Product JSON saved:', productJson.pathname);
