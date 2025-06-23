import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function seedUsers() {
  await prisma.user.createMany({
    data: [{'id': 1, 'name': 'Klaus Bundgaard', 'email': 'info@webudvikler.dk', 'passwordHash': 'password', 'refresh_token': '-', 'is_active': true}],
    skipDuplicates: true
  });
}
