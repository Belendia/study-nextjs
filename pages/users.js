import User from "../components/user";

function UsersList({ users }) {
  return (
    <>
      <h1>List of users</h1>
      {users.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </>
  );
}

export default UsersList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      users: data,
    },
  };
}
