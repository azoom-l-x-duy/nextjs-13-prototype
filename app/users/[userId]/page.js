import { PrismaClient } from '@prisma/client';
import UserDetails from './UserDetails';

async function UserDetailsPage({ params }) {
  const prisma = new PrismaClient();
  const user = await prisma.user.findFirst({ where: { id: +params.userId } });

  await waitSecond(2);
  if (!user) {
    throw new Error('User not found!');
  }

  return <UserDetails user={user} />;
}

const waitSecond = (second) =>
  new Promise((resolve, _reject) =>
    setTimeout(() => {
      resolve('ok');
    }, second * 1000)
  );

export default UserDetailsPage;
