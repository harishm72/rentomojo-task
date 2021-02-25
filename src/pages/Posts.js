import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";
import Spinner from "../components/Spinner/Spinner";

const Posts = (props) => {
  const { userId } = useParams();

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      try {
        const response = await Axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}&skip=0&limit=10`
        );
        setPosts(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [userId]);

  if (isLoading) return <Spinner />;

  if (error) return <h1>Error, please try after sometime</h1>;

  return (
    <div className="posts-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} userId={userId} />
      ))}
    </div>
  );
};

export default Posts;
