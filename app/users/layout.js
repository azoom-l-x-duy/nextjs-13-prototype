import { PrismaClient } from '@prisma/client';

import UserList from '../../components/users/UserList';
import classes from './layout.module.css';

async function UsersLayout({ children }) {
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany();

  return (
    <div className={classes.layout}>
      <aside className={classes.sidebar}>
        <UserList users={users} />
      </aside>
      {children}
    </div>
  );
}

export default UsersLayout;
