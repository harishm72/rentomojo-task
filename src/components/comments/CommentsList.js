import React from "react";

import Comment from "./Comment";

import "./comments.css"

const CommentsList = ({ comments }) => {
  return <ul className="comment-list">{comments.map(Comment)}</ul>;
};

export default CommentsList;
