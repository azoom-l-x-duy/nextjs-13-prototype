import classes from './UserDetails.module.css';

function UserDetails({ user }) {
  return (
    <article className={classes.details}>
      <header>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </header>
      <p>{user.userName}</p>
    </article>
  );
}

export default UserDetails;
