function User({ user }) {
  return (
    <div key={user.id}>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

export default User;
