import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import seedUsers from './seed/seed-users';
import seedProducts from './seed/seed-products';

async function main() {
  await seedProducts()
  await seedUsers()
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
