'use client';

function UserErrorPgae({ error }) {
  return <p>{error.message}</p>;
}

export default UserErrorPgae;
