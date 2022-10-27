import Link from 'next/link';

function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => {
        <li key={user.id}>
          <article>
            <h2>{user.title}</h2>
            <p>{user.summary}</p>
            <p>
              <Link href={`/users/${user.id}`}>User Detail</Link>
            </p>
          </article>
        </li>;
      })}
    </ul>
  );
}

export default UserList;
