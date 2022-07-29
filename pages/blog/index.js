import { getSession } from "next-auth/react";

function Blog({ data }) {
  return <h1>Blog Page: {data}</h1>;
}

export default Blog;

export async function getServerSideProps(context) {
  // check if the user is logged in before fetching data

  // Unlike calling getSession hook in the client side as we did in the _app.js
  // when calling it in the server side we should pass a context.
  const session = await getSession(context);

  // We don't return props, we should return a redirect object.
  // This is hwo we secure pages server side.
  // If we add this check, we will not get the list of free blog posts in the
  // props at the end of this function.
  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=http://localhost:3000/blog",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: session
        ? "List of 100 personalized blog posts"
        : "List of free blog posts",
    },
  };
}
