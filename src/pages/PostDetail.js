import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Axios from "axios";
import Spinner from "../components/Spinner/Spinner";
import CommentsList from "../components/comments/CommentsList";

const PostDetail = () => {
  const { postId, userId } = useParams();
  const history = useHistory();

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      try {
        const response = await Axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        setPost(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [postId]);

  const handleDelete = () => {
    setLoading(true);
    Axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => {
        history.push(`/${userId}`);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  };

  const fetchComments = () => {
    // GET /comments?postId=1
    setLoading(true);
    Axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (error) return <h1>Error, please try after sometime</h1>;

  if (!post) return <Spinner />;

  return (
    <div>
      <div className="post-details">
        <div className="flex-end">
          <button className="comments-btn danger" onClick={handleDelete}>
            Delete post
          </button>
        </div>
        <div className="post-header">
          <q className="capitalize">{post.title}</q>
        </div>
        <div className="post-body capitalize">{post.body}</div>
        <hr />
        {comments.length ? (
          <>
            <h2>Comments</h2>
            <CommentsList comments={comments} />
          </>
        ) : (
          <button
            className="comments-btn"
            onClick={fetchComments}
            disabled={comments.length}
          >
            Comments
          </button>
        )}
        {isLoading && <Spinner />}
      </div>
    </div>
  );
};

export default PostDetail;
