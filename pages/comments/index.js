import { useState } from "react";
function commentsPage({ commentList }) {
  const [comments, setComments] = useState(commentList);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    fetchComments();
  };

  const submitComment = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment }),
    });
    const data = await response.json();
    setComments([...comments, data]);
    setComment("");
  };

  return (
    <>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit</button>
      <button onClick={fetchComments}>Load comments</button>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h5>
            {comment.id}. {comment.text}{" "}
          </h5>
          <button onClick={() => deleteComment(comment.id)}>Delete</button>
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
