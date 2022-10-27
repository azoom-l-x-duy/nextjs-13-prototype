import UserList from '../../components/users/UserList';

function UsersLayout({ children }) {
  return (
    <div>
      <aside>
        <UserList users={[]} />
      </aside>
      {children}
    </div>
  );
}

export default UsersLayout;
