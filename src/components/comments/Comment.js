import React from "react";

const Comment = (comment) => {
  return (
    <li key={comment.id} className="comment-item">
      <div className="comment-name capitalize">{comment.name}</div>
      <div className="comment-by">by: {comment.email}</div>
      <div className="comment-body">{comment.body}</div>
    </li>
  );
};

export default Comment;
