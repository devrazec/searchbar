import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    // Test fetching products
    const products = await prisma.product.findMany({
      take: 3, // just fetch a few
      //include: { images: true },
    });

    const images = await prisma.image.findMany({
      take: 3, // just fetch a few
      //include: { images: true },
    });

    console.log('✅ Connection successful! Sample products:');
    console.dir(products, { depth: 2 });
    console.dir(images, { depth: 2 });
  } catch (error) {
    console.error('❌ Connection failed:');
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
