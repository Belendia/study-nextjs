import { useState } from "react";
function commentsPage({ commentList }) {
  const [comments, setComments] = useState(commentList);

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  return (
    <>
      <button onClick={fetchComments}>Load comments</button>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h5>
            {comment.id}. {comment.text}{" "}
          </h5>
        </div>
      ))}
    </>
  );
}

export default commentsPage;

export async function getServerSideProps(context) {
  const response = await fetch("http://localhost:3000/api/comments");
  const data = await response.json();

  return {
    props: {
      commentList: data,
    },
  };
}
