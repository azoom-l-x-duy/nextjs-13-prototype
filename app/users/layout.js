import UserList from '../../components/users/UserList';
import classes from './layout.module.css';

function UsersLayout({ children }) {
  return (
    <div className={classes.layout}>
      <aside className={classes.sidebar}>
        <UserList users={[]} />
      </aside>
      {children}
    </div>
  );
}

export default UsersLayout;
