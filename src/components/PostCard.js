import React from "react";
import { NavLink } from "react-router-dom";

/*
body: "ab nemo optio odio↵delectus "
id: 61
title: "voluptatem doloribus consectetur est ut ducimus"
userId: 7
*/

const PostCard = ({ post, userId }) => {
  const { id, title } = post;
  return (
    <div className="posts-item">
      <div className="post-title">{title}</div>
      <NavLink to={`/${userId}/posts/${id}`} className="view-post-link">
        <button className="view-post-link">View post</button>
      </NavLink>
    </div>
  );
};

export default PostCard;
