import React, { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [posts, setPosts] = useState({
    title: "",
    content: ""
  });
  const [error, setError] = useState(0);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URI}/users-posts`)
      .then(result => {
        console.log(result);
        setPosts(result.data.result);
      })
      .catch(error => setError(error.message));
  }, []);

  const handleChange = event => {};
  const handleSubmit = event => {};

  return (
    <div>
      <h3>DASHBOARD PAGE</h3>

      <form>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={posts.title}
        />
        <label htmlFor="content">Content</label>
        <textarea
          type="text"
          cols="30"
          rows="10"
          name="content"
          onChange={handleChange}
          value={posts.content}
        />
        <button onClick={handleSubmit}> Add New Post</button>
      </form>
      <div id="posts">POST LIST</div>
    </div>
  );
}

export default Dashboard;
