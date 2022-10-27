import Link from 'next/link';

function UserList({ users }) {
  console.log('hi: ', users);
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <article>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>
              <Link href={`/users/${user.id}`}>User Detail</Link>
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
