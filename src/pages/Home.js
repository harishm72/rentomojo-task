import Axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";

/**
 * {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
 */

const Home = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      try {
        const response = await Axios.get(
          `https://jsonplaceholder.typicode.com/users`
        );
        setUsers(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (isLoading) return <Spinner />;

  if (error) return <h1>Error, please try after sometime</h1>;

  return (
    <div className="app-wrapper">
      <div className="users-grid-container">
        <div className="grid users-grid users-grid-header">
          <div>Fullname</div>
          <div>Company name</div>
          <div>Posts</div>
        </div>
        {users.map((user) => (
          <div key={user.id} className="grid users-grid users-grid-body">
            <div>{user.name}</div>
            <div>{user.company?.name}</div>
            <div>
              <NavLink to={`/${user.id}`}>View blog</NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
