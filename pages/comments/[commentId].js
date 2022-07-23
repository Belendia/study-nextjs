import { useRouter } from "next/router";

function Comment({ comment }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h2>
        {comment.id} {comment.text}
      </h2>
    </>
  );
}

export default Comment;

export async function getStaticPaths({ params }) {
  return {
    paths: [{ params: { commentId: "1" } }, { params: { commentId: "2" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  // You can fetch this directoly form a database rather than calling an API
  const response = await fetch(
    `http://localhost:3000/api/comments/${params.commentId}`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }
  console.log(`Generating page for /comments/${params.commentId}`);
  return {
    props: {
      comment: data,
    },
  };
}
