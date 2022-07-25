function Items({ items }) {
  return (
    <>
      <h1>List of News Items</h1>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <h2>
              {item.id} {item.title}
            </h2>
          </div>
        );
      })}

      {
        // Next.js will make sure that the environment variables are not exposed to the broswer. It will only be
        // available in the node environment in the server side.
        // For exampe the following HTML code, the username and password will not be sent to the browser.
      }
      <h5>
        Username: {process.env.DB_USER} and Password: {process.env.DB_PASSWORD}
      </h5>
      {
        // To expose the environment variable to the user you should prefix the variable in the .env.local file with NEXT_PUBLIC_xxx
        // For example: NEXT_PUBLIC_API_KEY=1234567890
        // Now the API KEY variable will be available to the user in the browser.
      }
      <h5>API KEY: {process.env.NEXT_PUBLIC_API_KEY}</h5>
    </>
  );
}

export default Items;

export async function getServerSideProps() {
  // The .env.local will be automatically git ignored.
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  console.log(
    `Connecting to the database with user ${user} and password ${password}`
  );

  return {
    props: {
      items: [
        { id: 1, title: "Item 1" },
        { id: 2, title: "Item 2" },
      ],
    },
  };
}
