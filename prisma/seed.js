const { PrismaClient } = require('@prisma/client');

async function seed() {
  const prisma = new PrismaClient();
  await prisma.user.deleteMany();
  await prisma.user.create({
    data: {
      email: 'duyhihi@azoom.jp',
      name: 'Duylx',
      userName: 'duyhihi',
    },
  });
  await prisma.user.create({
    data: {
      email: 'telo@azoom.jp',
      name: 'Telo',
      userName: 'telo',
    },
  });
}

seed();
